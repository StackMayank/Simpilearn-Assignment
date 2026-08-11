import { Button } from "@/components/ui/Button";
import type { Cta } from "@/lib/landing/types";

type HeaderAuthActionsProps = {
  login: Cta;
  register: Cta;
  className?: string;
};

export function HeaderAuthActions({
  login,
  register,
  className = "",
}: HeaderAuthActionsProps) {
  return (
    <div className={className}>
      <Button
        href={login.href}
        variant="ghost"
        size="sm"
        className="h-10 px-0 hover:bg-transparent"
      >
        {login.label}
      </Button>
      <Button href={register.href} size="sm" className="min-w-[90px] px-6">
        {register.label}
      </Button>
    </div>
  );
}
