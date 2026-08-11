import { Button } from "@/components/ui/Button";
import { ContentImage } from "@/components/ui/ContentImage";
import type { BlogPost } from "@/lib/landing/types";

type BlogCardProps = {
  post: BlogPost;
};

/**
 * Blog card scaled for 1024 band (Figma was 368×286 / 317 panel).
 */
export function BlogCard({ post }: BlogCardProps) {
  return (
    <li className="relative mx-auto w-full max-w-[368px] pb-[96px] lg:max-w-[320px]">
      <div className="relative h-[220px] w-full overflow-hidden rounded-lg sm:h-[260px] lg:h-[250px]">
        <ContentImage
          src={post.image.src}
          alt={post.image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 368px, 320px"
          quality={95}
        />
      </div>

      <div className="absolute inset-x-4 top-[148px] mx-auto max-w-[280px] rounded-lg bg-silver px-3 py-4 text-center shadow-[var(--shadow-blog)] sm:top-[175px] lg:inset-x-5 lg:top-[170px] lg:max-w-[280px]">
        <h3 className="text-base font-semibold leading-7 text-heading sm:text-lg lg:text-lg lg:leading-7">
          {post.title}
        </h3>
        <div className="mt-4 flex justify-center">
          <Button
            href={post.link.href}
            variant="link"
            aria-label={post.link.label}
            className="!text-[18px] !leading-7"
          >
            Readmore
            <span aria-hidden>→</span>
          </Button>
        </div>
      </div>
    </li>
  );
}
