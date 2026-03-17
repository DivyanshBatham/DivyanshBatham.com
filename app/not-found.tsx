import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-[#232129] p-24 font-sans">
      <title>Not found</title>
      <h1 className="mt-0 mb-16 max-w-[320px] text-4xl font-bold">
        Page not found
      </h1>
      <p className="mb-12 text-lg">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in{" "}
            <code className="rounded bg-[#FFF4DB] p-1 text-xl text-[#8A6534]">
              app/
            </code>
            .
            <br />
          </>
        ) : null}
        <br />
        <Link href="/" className="underline">
          Go home
        </Link>
        .
      </p>
    </main>
  );
}

