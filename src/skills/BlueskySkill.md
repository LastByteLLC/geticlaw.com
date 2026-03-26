# Bluesky Skill

A skill for searching and browsing public content on Bluesky (ATProto). Use the `webfetch` tool to query the public AT Protocol API at `https://public.api.bsky.app/xrpc/`. No authentication is required for public content.

Key endpoints:

- Search posts: `https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts?q={query}&limit=5`
- Get profile: `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor={handle}`
- Author feed: `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor={handle}&limit=5`
- Search users: `https://public.api.bsky.app/xrpc/app.bsky.actor.searchActors?q={query}&limit=5`

Always request `limit=5` to stay within the token budget. Present posts with the author's display name and handle, text snippet, and engagement counts (likes, reposts). For profiles, show display name, handle, bio, follower/following counts. Handles may or may not include the `.bsky.social` suffix. If the handle contains a dot (e.g., `jay.bsky.team`), use it as-is. If it doesn't (bare username like `alice`), append `.bsky.social`.

## Examples

- "search Bluesky for Swift programming"
- "what's trending on Bluesky"
- "find @jay.bsky.team on Bluesky"
- "Bluesky posts about AI"
- "look up someone on Bluesky"
- "search bsky for machine learning"
- "Bluesky profile for aoc.bsky.social"
- "latest posts on Bluesky about Apple"
