import Image from "next/image";
import Link from "next/link";

export default function BlogCard() {
  return (
    <div className="bg-zinc-800 p-4 rounded-sm mb-4">
      <Link href="">
        <h2 className="text-4xl font-semibold text-zinc-50">
          How to hack nasa with html
        </h2>
      </Link>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-sm text-zinc-200">23 Nov 2023</span>
        <span className="text-sm text-zinc-200">#react, #web, #frontend</span>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2">
          <Link href="#">
            <img
              className="w-10 h-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/48852166?v=4"
              alt="avatar"
            />
          </Link>

          <Link href="" className="text-sm text-zinc-100">
            Mehedi H Sajib
          </Link>
        </div>
      </div>
    </div>
  );
}
