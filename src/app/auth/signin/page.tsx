'use client';

import Link from "next/link";
import { GoogleSignInButton, GithubSignInButton } from "./auth-buttons";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link
              href="/auth/signup"
              className="font-medium text-black dark:text-white hover:opacity-80"
            >
              create a new account
            </Link>
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <GoogleSignInButton />
          <GithubSignInButton />
        </div>
      </div>
    </div>
  );
}