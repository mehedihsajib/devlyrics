"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserInfo() {
  const { data: session } = useSession();
  const router = useRouter();

  function handleLogOut() {
    signOut();
    router.push("/");
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div className="text-zinc-50">
          Name:{" "}
          <span className="font-bold text-zinc-50">{session?.user?.name}</span>
        </div>
        <div className="text-zinc-50">
          Email:{" "}
          <span className="font-bold text-zinc-50">{session?.user?.email}</span>
        </div>
        <button
          onClick={handleLogOut}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
