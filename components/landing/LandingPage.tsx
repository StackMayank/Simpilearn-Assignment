import { Achievements } from "@/components/landing/sections/Achievements";
import { Blog } from "@/components/landing/sections/Blog";
import { Clients } from "@/components/landing/sections/Clients";
import { Community } from "@/components/landing/sections/Community";
import { CtaBanner } from "@/components/landing/sections/CtaBanner";
import { FeatureSplit } from "@/components/landing/sections/FeatureSplit";
import { Hero } from "@/components/landing/sections/Hero";
import { Testimonial } from "@/components/landing/sections/Testimonial";
import { getLandingContent } from "@/lib/landing/get-landing-content";


export async function LandingPage() {
  const content = await getLandingContent();

  return (
    <main id="main-content">
      <Hero content={content.hero} />
      <Clients content={content.clients} />
      <Community content={content.community} />
      <FeatureSplit content={content.unlock} id="unlock" />
      <Achievements content={content.achievements} />
      <FeatureSplit content={content.calendar} id="calendar" />
      <Testimonial content={content.testimonial} />
      <Blog content={content.blog} />
      <CtaBanner content={content.ctaBanner} />
    </main>
  );
}
