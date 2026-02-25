import GhostContentAPI from "@tryghost/content-api";

export const ghost = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL!,
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_KEY!,
  version: "v5.0",
});
