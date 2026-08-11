import Image from "next/image";

type ContentImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /**
   * Raster quality. Defaults to 75 (Next default). Pass 95 only for LCP /
   * hero-scale photography when the extra bytes are justified.
   */
  quality?: 75 | 95;
};

function isSvg(src: string) {
  return src.toLowerCase().endsWith(".svg");
}

/**
 * Renders images from landing content.
 * Local SVGs use `unoptimized` so vectors stay crisp (intentional tradeoff).
 * Rasters go through next/image; default quality is 75.
 */
export function ContentImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  quality = 75,
}: ContentImageProps) {
  const svg = isSvg(src);
  const imageProps = svg
    ? { unoptimized: true as const }
    : { quality };

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        {...imageProps}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 100}
      height={height ?? 100}
      className={className}
      sizes={sizes}
      priority={priority}
      {...imageProps}
    />
  );
}
