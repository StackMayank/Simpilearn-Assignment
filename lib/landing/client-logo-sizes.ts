/** Figma Clients strip order (left → right) + intrinsic sizes. */
export const CLIENT_LOGOS = [
  { src: "/assets/images/company1.svg", width: 40, height: 40 },
  { src: "/assets/images/company2.svg", width: 55, height: 30 },
  { src: "/assets/images/company3.svg", width: 47, height: 30 },
  { src: "/assets/images/company4.svg", width: 41, height: 28 },
  { src: "/assets/images/company5.svg", width: 52, height: 21 },
  { src: "/assets/images/company6.svg", width: 55, height: 30 },
  { src: "/assets/images/company7.svg", width: 40, height: 29 },
] as const;

/** @deprecated Prefer CLIENT_LOGOS — kept for any size lookups by src. */
export const CLIENT_LOGO_SIZES: Record<
  string,
  { width: number; height: number }
> = Object.fromEntries(
  CLIENT_LOGOS.map((logo) => [logo.src, { width: logo.width, height: logo.height }]),
);
