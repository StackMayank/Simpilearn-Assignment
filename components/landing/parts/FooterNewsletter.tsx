import { NewsletterForm } from "@/components/landing/parts/NewsletterForm";

type FooterNewsletterProps = {
  title: string;
  placeholder: string;
  submitLabel: string;
  className?: string;
};

export function FooterNewsletter({
  title,
  placeholder,
  submitLabel,
  className = "",
}: FooterNewsletterProps) {
  return (
    <div className={className}>
      <h3 className="text-xl font-semibold leading-7 text-white">{title}</h3>
      <NewsletterForm placeholder={placeholder} submitLabel={submitLabel} />
    </div>
  );
}
