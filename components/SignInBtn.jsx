"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SignInBtn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src={"/google-logo.png"} width={30} height={30} />
      <span className="bg-blue-500 text-white px-4 py-3">
        Sign In with Google
      </span>
    </button>
  );
};

export default SignInBtn;
