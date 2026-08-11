export type NavLink = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  /** Intrinsic pixel size — used when the image drives layout height. */
  width?: number;
  height?: number;
};

export type HeaderContent = {
  logo: ImageAsset;
  nav: NavLink[];
  login: Cta;
  register: Cta;
};

export type HeroContent = {
  title: string;
  titleHighlight: string;
  description: string;
  cta: Cta;
  image: ImageAsset;
  /** Pagination dots under the hero (Figma carousel) */
  carousel: {
    slideCount: number;
    activeIndex: number;
  };
};

export type ClientsContent = {
  title: string;
  description: string;
  logos: ImageAsset[];
};

export type CommunityCard = {
  icon: ImageAsset;
  title: string;
  description: string;
};

export type CommunityContent = {
  title: string;
  description: string;
  cards: CommunityCard[];
};

export type FeatureSplitContent = {
  title: string;
  description: string;
  cta: Cta;
  image: ImageAsset;
};

export type StatItem = {
  icon: ImageAsset;
  value: string;
  label: string;
};

export type AchievementsContent = {
  title: string;
  titleHighlight: string;
  description: string;
  stats: StatItem[];
};

export type TestimonialContent = {
  quote: string;
  author: string;
  role: string;
  image: ImageAsset;
  logos: ImageAsset[];
  link: Cta;
};

export type BlogPost = {
  image: ImageAsset;
  title: string;
  link: Cta;
};

export type BlogContent = {
  title: string;
  description: string;
  posts: BlogPost[];
};

export type CtaBannerContent = {
  title: string;
  cta: Cta;
};

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};

export type SocialLink = {
  label: string;
  href: string;
  /** Key into footer social icon map (instagram | dribbble | twitter | youtube) */
  icon: string;
};

export type FooterContent = {
  logo: ImageAsset;
  copyright: string;
  socials: SocialLink[];
  columns: FooterLinkGroup[];
  newsletter: {
    title: string;
    placeholder: string;
    submitLabel: string;
  };
};

export type LandingPageContent = {
  meta: {
    title: string;
    description: string;
  };
  header: HeaderContent;
  hero: HeroContent;
  clients: ClientsContent;
  community: CommunityContent;
  unlock: FeatureSplitContent;
  achievements: AchievementsContent;
  calendar: FeatureSplitContent;
  testimonial: TestimonialContent;
  blog: BlogContent;
  ctaBanner: CtaBannerContent;
  footer: FooterContent;
};
