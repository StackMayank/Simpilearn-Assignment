import { ContentImage } from "@/components/ui/ContentImage";

type IconImageProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

/** Square crop for icons/logos so layout doesn't jump when assets differ. */
export function IconImage({
  src,
  alt,
  size = 40,
  className = "",
}: IconImageProps) {
  return (
    <span
      className={`relative inline-flex shrink-0 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <ContentImage
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes={`${size}px`}
      />
    </span>
  );
}
