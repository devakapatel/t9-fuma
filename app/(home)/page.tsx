import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">T9 Beta Testing</h1>
      <p className="text-fd-muted-foreground">
        <Link
          href="/about"
          className="text-fd-foreground font-semibold underline"
        >
          About
        </Link>
      </p>
      <p className="text-fd-muted-foreground">
        <Link
          href="/sem-7"
          className="text-fd-foreground font-semibold underline"
        >
          Semester 7
        </Link>
      </p>
    </main>
  );
}
