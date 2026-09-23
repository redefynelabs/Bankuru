import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black px-4 text-center">
      <p className="text-[#BEBCBA] text-sm tracking-[0.3em] uppercase">Error 404</p>
      <h1 className="gradient-text font-bold xl:text-[120px] md:text-[96px] text-[72px] leading-none mt-4">
        Lost?
      </h1>
      <p className="text-[#BEBCBA] md:text-[20px] text-base mt-6 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center border border-[#FFFFFF2E] w-[160px] h-[42px] rounded-[30px] text-white hover:bg-[#FFFFFF33] transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
