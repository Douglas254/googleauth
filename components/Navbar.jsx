"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();

  console.log(status);
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link href={"/"} className="font-bold text-3xl text-zinc-700 font-vibes">
        Douglas
        <span className="text-[#BB0000]">2</span>
        <span className="text-[#000000]">5</span>
        <span className="text-[#006600]">4</span>
      </Link>

      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
      )}
    </div>
  );
};

export default Navbar;
