import { sanityConfig } from "./config";

/**
 * Minimal, dependency-free Sanity client using the HTTP Query API.
 * Swap for `next-sanity` later if you need live preview or visual editing.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  revalidate = 60,
): Promise<T> {
  const { projectId, dataset, apiVersion, token } = sanityConfig;
  const host = token ? "api.sanity.io" : "apicdn.sanity.io";
  const url = new URL(`https://${projectId}.${host}/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", query);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }

  const res = await fetch(url, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    next: { revalidate, tags: ["sanity"] },
  });
  if (!res.ok) throw new Error(`Sanity query failed: ${res.status} ${res.statusText}`);
  const json = (await res.json()) as { result: T };
  return json.result;
}
