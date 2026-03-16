export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const assetUrl = url.pathname === "/" ? new URL("/index.html", "https://assets.local") : request;
      return await env.ASSETS.fetch(assetUrl);
    } catch (err) {
      return new Response("Not found", { status: 404 });
    }
  },
};
