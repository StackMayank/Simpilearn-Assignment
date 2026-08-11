"use client";

import { forwardRef } from "react";

type MobileMenuToggleProps = {
  open: boolean;
  onToggle: () => void;
  controlsId: string;
};

export const MobileMenuToggle = forwardRef<
  HTMLButtonElement,
  MobileMenuToggleProps
>(function MobileMenuToggle({ open, onToggle, controlsId }, ref) {
  return (
    <button
      ref={ref}
      type="button"
      className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-md text-heading transition-colors hover:bg-silver focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden"
      aria-expanded={open}
      aria-controls={controlsId}
      aria-label={open ? "Close navigation" : "Open navigation"}
      onClick={onToggle}
    >
      <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
      <span className="relative block h-3.5 w-5" aria-hidden>
        <span
          className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-heading transition-transform duration-200 ${
            open ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`absolute left-0 top-[6px] block h-0.5 w-5 rounded-full bg-heading transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-0 top-[12px] block h-0.5 w-5 rounded-full bg-heading transition-transform duration-200 ${
            open ? "-translate-y-[6px] -rotate-45" : ""
          }`}
        />
      </span>
    </button>
  );
});
