import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h4 className="text-2xl font-bold text-zinc-50">
        Dev<span className="text-zinc-700">Lyrics</span>
      </h4>
    </Link>
  );
}
