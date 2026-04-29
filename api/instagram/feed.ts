export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  // Fallback to the initial provided token if KV is not set up
  const FALLBACK_TOKEN = process.env.INSTAGRAM_INITIAL_TOKEN || "IGAAMXZBrRlvW9BZAGJDOGFmaHZAMeF93Q3hMOVhxVWl4bDBBTlpkcll4d3VUVUpmbWoyTTdGd3B1ZAlk5TlpwOXlpazAtYVFscXlnNWIyWE43OGc3MEdiRXdudWdmX0NTdGRGQzNBc3pqcTVsZAzE4ZAmFvTm4tTG1nR2d6ZAEptRDBrOAZDZD";
  
  let token = FALLBACK_TOKEN;
  
  try {
    // Attempt to dynamically import Vercel KV
    // @ts-ignore
    const { kv } = await import('@vercel/kv');
    const storedToken = await kv.get('instagram_access_token');
    if (storedToken) {
      token = storedToken as string;
    }
  } catch (err) {
    console.log("Vercel KV not configured or unavailable. Using fallback token.");
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&limit=5&access_token=${token}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.text();
      return new Response(JSON.stringify({ error: "Failed to fetch Instagram API", details: errorData }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
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
