type TestimonialQuoteBlockProps = {
  quote: string;
  author: string;
  role: string;
};

/**
 * Figma Content (22:755): quote → 16px → author block (name 28 / role 24, 8px apart).
 */
export function TestimonialQuoteBlock({
  quote,
  author,
  role,
}: TestimonialQuoteBlockProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm leading-5 text-muted sm:text-base sm:leading-6 lg:text-[14px] lg:leading-[1.6] mt-2">
        {quote}
      </p>
      <div className="space-y-2">
        <p className="text-lg font-semibold leading-7 text-primary lg:text-xl">
          {author}
        </p>
        <p className="text-sm leading-5 text-secondary-muted lg:text-base lg:leading-6">
          {role}
        </p>
      </div>
    </div>
  );
}
