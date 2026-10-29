import type { APIRoute } from 'astro';

export const prerender = false;

const CACHE_TTL_MS = 5 * 60 * 1000;
const CACHE_MAX_ENTRIES = 500;
const UPSTREAM_TIMEOUT_MS = 3 * 1000;
const USERNAME_PATTERN = /^(?=.{1,39}$)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;

interface CacheEntry {
	data: unknown;
	expiresAt: number;
}

const contributionCache = new Map<string, CacheEntry>();

function jsonResponse(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Cache-Control': 'no-store',
			'Content-Type': 'application/json; charset=utf-8',
		},
	});
}

function getCachedContribution(username: string, now: number): CacheEntry | undefined {
	const entry = contributionCache.get(username);

	if (!entry) {
		return undefined;
	}

	if (entry.expiresAt <= now) {
		contributionCache.delete(username);
		return undefined;
	}

	contributionCache.delete(username);
	contributionCache.set(username, entry);
	return entry;
}

function cacheContribution(username: string, data: unknown, now: number): void {
	contributionCache.delete(username);

	while (contributionCache.size >= CACHE_MAX_ENTRIES) {
		const oldestUsername = contributionCache.keys().next().value;
		if (oldestUsername === undefined) {
			break;
		}
		contributionCache.delete(oldestUsername);
	}

	contributionCache.set(username, {
		data,
		expiresAt: now + CACHE_TTL_MS,
	});
}

function isTimeoutError(error: unknown): boolean {
	return error instanceof DOMException && error.name === 'TimeoutError';
}

export const GET: APIRoute = async ({ params }) => {
	const requestedUsername = params.username;

	if (!requestedUsername || !USERNAME_PATTERN.test(requestedUsername)) {
		return jsonResponse({ error: 'Invalid GitHub username' }, 400);
	}

	const username = requestedUsername.toLowerCase();
	const cachedEntry = getCachedContribution(username, Date.now());

	if (cachedEntry) {
		return jsonResponse(cachedEntry.data);
	}

	let upstreamResponse: Response;
	try {
		upstreamResponse = await fetch(
			`https://github.com/${encodeURIComponent(requestedUsername)}.contribs`,
			{ signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS) },
		);
	} catch (error) {
		if (isTimeoutError(error)) {
			return jsonResponse({ error: 'GitHub contribution request timed out' }, 504);
		}

		return jsonResponse({ error: 'Unable to reach GitHub contributions' }, 502);
	}

	if (upstreamResponse.status === 404) {
		return jsonResponse({ error: 'GitHub user not found' }, 404);
	}

	if (!upstreamResponse.ok) {
		return jsonResponse({ error: 'GitHub contribution request failed' }, 502);
	}

	let contributionData: unknown;
	try {
		contributionData = await upstreamResponse.json();
	} catch (error) {
		if (isTimeoutError(error)) {
			return jsonResponse({ error: 'GitHub contribution request timed out' }, 504);
		}

		return jsonResponse({ error: 'GitHub returned invalid contribution data' }, 502);
	}

	cacheContribution(username, contributionData, Date.now());
	return jsonResponse(contributionData);
};
