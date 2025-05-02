import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="grid h-screen content-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold leading-tight text-neutral-700 md:text-5xl">
          404
        </h1>
        <p className="text-sm text-neutral-700">Sorry we couldn&apos;t find this page.</p>

        <Link
          href="/"
          className="btn rounded-full bg-gradient-to-tr from-indigo-500 to-sky-500 px-5 text-base text-white"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
