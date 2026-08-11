import { cache } from "react";
import landing from "@/content/landing.json";
import type { LandingPageContent } from "@/lib/landing/types";

export const getLandingContent = cache(
  async (): Promise<LandingPageContent> => {
    return landing as LandingPageContent;
  },
);
