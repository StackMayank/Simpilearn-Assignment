"use client";

import { useId, useState, type FormEvent } from "react";

type NewsletterFormProps = {
  placeholder: string;
  submitLabel: string;
};

/** Figma footer send control — outlined paper plane (not filled Material send). */
function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2z" />
    </svg>
  );
}

/** Local-only newsletter form: validation + status messaging, no backend. */
export function NewsletterForm({
  placeholder,
  submitLabel,
}: NewsletterFormProps) {
  const inputId = useId();
  const errorId = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(false);

    const value = email.trim();
    if (!value) {
      setError("Enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }

    setError(null);
    setSuccess(true);
    setEmail("");
  }

  return (
    <form className="relative w-full max-w-[255px]" onSubmit={onSubmit} noValidate>
      <label className="sr-only" htmlFor={inputId}>
        {placeholder}
      </label>
      <input
        id={inputId}
        type="email"
        name="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setError(null);
          setSuccess(false);
        }}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="h-10 w-full rounded-lg border-0 bg-[#515B60] px-3 pr-11 text-sm leading-5 text-silver placeholder:text-placeholder outline-none ring-primary focus:ring-2 focus-visible:ring-2"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-[var(--radius-sm)] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={submitLabel}
      >
        <SendIcon />
      </button>
      {error ? (
        <p id={errorId} className="mt-2 text-xs text-red-300" role="alert">
          {error}
        </p>
      ) : null}
      {success ? (
        <p className="mt-2 text-xs text-primary-soft" role="status">
          Thanks — you are on the list.
        </p>
      ) : null}
    </form>
  );
}
