'use client';

import Link from "next/link";
import SignUpForm from "./signup-form";
import { GoogleSignInButton, GithubSignInButton } from "../signin/auth-buttons";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{" "}
            <Link
              href="/auth/signin"
              className="font-medium text-black dark:text-white hover:opacity-80"
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <GoogleSignInButton />
          <GithubSignInButton />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400">Or continue with</span>
            </div>
          </div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}