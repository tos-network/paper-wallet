export default {
  async fetch(request, env, ctx) {
    try {
      return await env.ASSETS.fetch(request);
    } catch (err) {
      return new Response("Not found", { status: 404 });
    }
  },
};
