// app/hello/page.tsx   (or any .tsx file)
"use client";
import { useEffect, useState } from "react";

export default function Hello() {
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    fetch("https://remoteserver.liveblog365.com/hello.php", {
      method: "GET",
      credentials: "omit",
    })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then((d) => setMsg(d.message))
      .catch(() => setMsg("Forbidden"));
  }, []);

  return <p>{msg || "Loading…"}</p>;
}
