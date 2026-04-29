export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // This endpoint should be triggered securely by a Cron Job
  // Check authorization headers if needed

  const FALLBACK_TOKEN = process.env.INSTAGRAM_INITIAL_TOKEN || "IGAAMXZBrRlvW9BZAGJDOGFmaHZAMeF93Q3hMOVhxVWl4bDBBTlpkcll4d3VUVUpmbWoyTTdGd3B1ZAlk5TlpwOXlpazAtYVFscXlnNWIyWE43OGc3MEdiRXdudWdmX0NTdGRGQzNBc3pqcTVsZAzE4ZAmFvTm4tTG1nR2d6ZAEptRDBrOAZDZD";
  let currentToken = FALLBACK_TOKEN;

  let kvStore: any = null;
  try {
    // @ts-ignore
    const { kv } = await import('@vercel/kv');
    kvStore = kv;
    const storedToken = await kv.get('instagram_access_token');
    if (storedToken) {
      currentToken = storedToken as string;
    }
  } catch (err) {
    console.error("Vercel KV not configured. Cannot strictly persist the refreshed token visually.");
  }

  try {
    // Call Instagram Refresh Endpoint
    const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
    const response = await fetch(refreshUrl);

    if (!response.ok) {
      const errorData = await response.text();
      return new Response(JSON.stringify({ error: "Failed to refresh token", details: errorData }), {
        status: response.status,
      });
    }

    const data = await response.json();
    const newToken = data.access_token;

    // Persist new token if KV is available
    if (kvStore && newToken) {
      await kvStore.set('instagram_access_token', newToken);
    }

    return new Response(JSON.stringify({ success: true, message: "Token refreshed successfully", storeConfigured: !!kvStore }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
