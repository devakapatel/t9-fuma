// src/app/api/hello/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.yourdomain.com/hello.php", {
    headers: { Origin: "https://t9.pages.dev" },
  });

  // Forward status & body
  const data = await res.text();
  return new NextResponse(data, {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
