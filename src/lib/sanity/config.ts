export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01",
  token: process.env.SANITY_API_READ_TOKEN ?? "",
};

/** True once a Sanity project ID is set in the environment. */
export const isSanityConfigured = Boolean(sanityConfig.projectId);
