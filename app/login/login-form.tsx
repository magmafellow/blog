"use client";

import { useFormState } from "react-dom";
import { authenticate } from "../lib/actions";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  
  return (
    <form action={dispatch}>
      <div className="mb-8">
        <label className="text-center w-40 text-xl inline-block" htmlFor="email">
          Your email:{" "}
        </label>
        <input
          className="w-[190px] px-1 text-lg border border-neutral-700 focus:outline focus:outline-sky-400"
          type="text"
          id="email"
          name="email_field"
        />
      </div>
      <div className="mb-5">
        <label className="text-center w-40 text-xl inline-block" htmlFor="password">
          Your password:{" "}
        </label>
        <input
          className="w-[190px] px-1 border text-lg border-neutral-700 focus:outline focus:outline-sky-400"
          type="password"
          id="password"
          name="password_field"
        />
      </div>
      {/* error banner */}
      <div>
        {errorMessage && <p className="text-red-800 mb-5 underline underline-offset-2">{errorMessage}</p>}
      </div>
      <div className="text-center">
        <button className="py-2 px-3 text-xl bg-sky-300 text-sky-800 hover:bg-sky-100 transition">
          ready!
        </button>
      </div>
    </form>
  );
}
