import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Royal Shop Demo</h1>
        <Link href="/auth/login" className="underline text-blue-600">
          Login
        </Link>
      </section>
    </main>
  );
}
