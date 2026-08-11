import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/landing/parts/SectionHeading";
import { BlogCard } from "@/components/landing/parts/BlogCard";
import type { BlogContent } from "@/lib/landing/types";

type BlogProps = {
  content: BlogContent;
};

/** Community Updates: 3 cards scaled to fit the 1024 content band. */
export function Blog({ content }: BlogProps) {
  return (
    <section
      id="blog"
      className="py-10 lg:mb-[var(--gap-blog-cta)] lg:flex lg:min-h-[var(--h-blog)] lg:flex-col lg:justify-center lg:py-0"
    >
      <Container className="text-center">
        <SectionHeading
          title={content.title}
          description={content.description}
          titleClassName="mx-auto max-w-full text-heading-section"
          descriptionClassName="mx-auto mt-2 max-w-[560px] text-sm leading-6 text-muted sm:text-[14px] sm:leading-5"
        />

        <ul className="mt-10 grid justify-items-center gap-x-6 gap-y-20 sm:mt-12 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-0 xl:gap-x-6">
          {content.posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
