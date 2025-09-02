// functions/api/hello.ts
export async function onRequestGet() {
  const res = await fetch("https://remoteserver.liveblog365.com/hello.php", {
    headers: { Origin: "https://t9.pages.dev" },
  });
  return new Response(res.body, { status: res.status, headers: res.headers });
}
