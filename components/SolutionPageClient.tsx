"use client";

import { useSiteContent } from "@/context/SiteContentContext";
import SolutionHero from "./SolutionHero";
import IndustryChallenges from "./IndustryChallenges";
import AlternatingShowcase from "./AlternatingShowcase";
import SolutionBenefits from "./SolutionBenefits";
import IconGrid from "./IconGrid";
import VerticalCardCarousel from "./VerticalCardCarousel";
import SolutionStats from "./SolutionStats";
import WhyChooseSelfX from "./WhyChooseSelfX";
import FAQAccordion from "./FAQAccordion";
import FinalCTA from "./FinalCTA";
import { SolutionData } from "@/lib/solutionData";

import * as LucideIcons from "lucide-react";

interface SolutionPageClientProps {
  solutionKey: string;
  defaultData: SolutionData;
}

export default function SolutionPageClient({ solutionKey, defaultData }: SolutionPageClientProps) {
  
  // 1. Hero
  const heroData = useSiteContent("hero", {
    title: defaultData.hero.title,
    subtitle: defaultData.hero.subtitle,
    description: defaultData.hero.description,
    imageSrc: defaultData.hero.imageSrc,
    buttonText: defaultData.hero.buttonText,
    secondaryButtonText: defaultData.hero.secondaryButtonText
  });

  // 2. Challenges
  const challengesData = useSiteContent("challenges", {
    title: defaultData.challenges.title,
    subtitle: defaultData.challenges.subtitle,
    challenge1Icon: defaultData.challenges.challenges[0]?.icon || "Clock",
    challenge1Title: defaultData.challenges.challenges[0]?.title || "",
    challenge1Desc: defaultData.challenges.challenges[0]?.description || "",
    challenge2Icon: defaultData.challenges.challenges[1]?.icon || "Clock",
    challenge2Title: defaultData.challenges.challenges[1]?.title || "",
    challenge2Desc: defaultData.challenges.challenges[1]?.description || "",
    challenge3Icon: defaultData.challenges.challenges[2]?.icon || "Clock",
    challenge3Title: defaultData.challenges.challenges[2]?.title || "",
    challenge3Desc: defaultData.challenges.challenges[2]?.description || "",
  });

  const getLucideIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    return IconComponent || LucideIcons.Activity;
  };

  const challengesArray = [
    { icon: getLucideIcon(challengesData.challenge1Icon), title: challengesData.challenge1Title, description: challengesData.challenge1Desc },
    { icon: getLucideIcon(challengesData.challenge2Icon), title: challengesData.challenge2Title, description: challengesData.challenge2Desc },
    { icon: getLucideIcon(challengesData.challenge3Icon), title: challengesData.challenge3Title, description: challengesData.challenge3Desc }
  ].filter(item => item.title !== "");

  // 3. Showcase
  const showcaseData = useSiteContent("showcase", {
    title: defaultData.showcase.title,
    subtitle: defaultData.showcase.subtitle,
    item1Subtitle: defaultData.showcase.items[0]?.subtitle || "",
    item1Title: defaultData.showcase.items[0]?.title || "",
    item1Desc: defaultData.showcase.items[0]?.description || "",
    item1Bullets: defaultData.showcase.items[0]?.bullets.join(",") || "",
    item1Image: defaultData.showcase.items[0]?.mainImage || "",
    item2Subtitle: defaultData.showcase.items[1]?.subtitle || "",
    item2Title: defaultData.showcase.items[1]?.title || "",
    item2Desc: defaultData.showcase.items[1]?.description || "",
    item2Bullets: defaultData.showcase.items[1]?.bullets.join(",") || "",
    item2Image: defaultData.showcase.items[1]?.mainImage || "",
    item3Subtitle: defaultData.showcase.items[2]?.subtitle || "",
    item3Title: defaultData.showcase.items[2]?.title || "",
    item3Desc: defaultData.showcase.items[2]?.description || "",
    item3Bullets: defaultData.showcase.items[2]?.bullets.join(",") || "",
    item3Image: defaultData.showcase.items[2]?.mainImage || "",
  });

  const showcaseItemsArray = [
    {
      subtitle: showcaseData.item1Subtitle,
      title: showcaseData.item1Title,
      description: showcaseData.item1Desc,
      bullets: typeof showcaseData.item1Bullets === "string" ? showcaseData.item1Bullets.split(",").map((s: string) => s.trim()).filter(Boolean) : defaultData.showcase.items[0]?.bullets || [],
      mainImage: showcaseData.item1Image,
      subImages: []
    },
    {
      subtitle: showcaseData.item2Subtitle,
      title: showcaseData.item2Title,
      description: showcaseData.item2Desc,
      bullets: typeof showcaseData.item2Bullets === "string" ? showcaseData.item2Bullets.split(",").map((s: string) => s.trim()).filter(Boolean) : defaultData.showcase.items[1]?.bullets || [],
      mainImage: showcaseData.item2Image,
      subImages: []
    },
    {
      subtitle: showcaseData.item3Subtitle,
      title: showcaseData.item3Title,
      description: showcaseData.item3Desc,
      bullets: typeof showcaseData.item3Bullets === "string" ? showcaseData.item3Bullets.split(",").map((s: string) => s.trim()).filter(Boolean) : defaultData.showcase.items[2]?.bullets || [],
      mainImage: showcaseData.item3Image,
      subImages: []
    }
  ].filter(item => item.title !== "");

  // 4. Benefits
  const benefitsData = useSiteContent("benefits", {
    title: defaultData.benefits.title,
    subtitle: defaultData.benefits.subtitle,
    imageSrc: defaultData.benefits.imageSrc || "",
    videoSrc: defaultData.benefits.videoSrc || "",
    benefit1Title: defaultData.benefits.benefits[0]?.title || "",
    benefit1Desc: defaultData.benefits.benefits[0]?.description || "",
    benefit2Title: defaultData.benefits.benefits[1]?.title || "",
    benefit2Desc: defaultData.benefits.benefits[1]?.description || "",
    benefit3Title: defaultData.benefits.benefits[2]?.title || "",
    benefit3Desc: defaultData.benefits.benefits[2]?.description || "",
  });

  const benefitsArray = [
    { title: benefitsData.benefit1Title, description: benefitsData.benefit1Desc },
    { title: benefitsData.benefit2Title, description: benefitsData.benefit2Desc },
    { title: benefitsData.benefit3Title, description: benefitsData.benefit3Desc }
  ].filter(item => item.title !== "");

  // 5. IconGrid
  const iconGridData = useSiteContent("icongrid", {
    title: defaultData.icongrid.title,
    subtitle: defaultData.icongrid.subtitle,
    item1Icon: defaultData.icongrid.items[0]?.icon || "Activity",
    item1Title: defaultData.icongrid.items[0]?.title || "",
    item1Desc: defaultData.icongrid.items[0]?.description || "",
    item2Icon: defaultData.icongrid.items[1]?.icon || "Activity",
    item2Title: defaultData.icongrid.items[1]?.title || "",
    item2Desc: defaultData.icongrid.items[1]?.description || "",
    item3Icon: defaultData.icongrid.items[2]?.icon || "Activity",
    item3Title: defaultData.icongrid.items[2]?.title || "",
    item3Desc: defaultData.icongrid.items[2]?.description || "",
    item4Icon: defaultData.icongrid.items[3]?.icon || "Activity",
    item4Title: defaultData.icongrid.items[3]?.title || "",
    item4Desc: defaultData.icongrid.items[3]?.description || "",
    item5Icon: defaultData.icongrid.items[4]?.icon || "Activity",
    item5Title: defaultData.icongrid.items[4]?.title || "",
    item5Desc: defaultData.icongrid.items[4]?.description || "",
    item6Icon: defaultData.icongrid.items[5]?.icon || "Activity",
    item6Title: defaultData.icongrid.items[5]?.title || "",
    item6Desc: defaultData.icongrid.items[5]?.description || "",
    item7Icon: defaultData.icongrid.items[6]?.icon || "Activity",
    item7Title: defaultData.icongrid.items[6]?.title || "",
    item7Desc: defaultData.icongrid.items[6]?.description || "",
    item8Icon: defaultData.icongrid.items[7]?.icon || "Activity",
    item8Title: defaultData.icongrid.items[7]?.title || "",
    item8Desc: defaultData.icongrid.items[7]?.description || "",
  });

  const iconGridArray = [
    { icon: getLucideIcon(iconGridData.item1Icon), title: iconGridData.item1Title, description: iconGridData.item1Desc },
    { icon: getLucideIcon(iconGridData.item2Icon), title: iconGridData.item2Title, description: iconGridData.item2Desc },
    { icon: getLucideIcon(iconGridData.item3Icon), title: iconGridData.item3Title, description: iconGridData.item3Desc },
    { icon: getLucideIcon(iconGridData.item4Icon), title: iconGridData.item4Title, description: iconGridData.item4Desc },
    { icon: getLucideIcon(iconGridData.item5Icon), title: iconGridData.item5Title, description: iconGridData.item5Desc },
    { icon: getLucideIcon(iconGridData.item6Icon), title: iconGridData.item6Title, description: iconGridData.item6Desc },
    { icon: getLucideIcon(iconGridData.item7Icon), title: iconGridData.item7Title, description: iconGridData.item7Desc },
    { icon: getLucideIcon(iconGridData.item8Icon), title: iconGridData.item8Title, description: iconGridData.item8Desc }
  ].filter(item => item.title !== "");

  // 6. Carousel
  const carouselData = useSiteContent("carousel", {
    title: defaultData.carousel.title,
    subtitle: defaultData.carousel.subtitle,
    card1Title: defaultData.carousel.cards[0]?.title || "",
    card1Image: defaultData.carousel.cards[0]?.imageSrc || "",
    card2Title: defaultData.carousel.cards[1]?.title || "",
    card2Image: defaultData.carousel.cards[1]?.imageSrc || "",
    card3Title: defaultData.carousel.cards[2]?.title || "",
    card3Image: defaultData.carousel.cards[2]?.imageSrc || "",
    card4Title: defaultData.carousel.cards[3]?.title || "",
    card4Image: defaultData.carousel.cards[3]?.imageSrc || "",
    card5Title: defaultData.carousel.cards[4]?.title || "",
    card5Image: defaultData.carousel.cards[4]?.imageSrc || "",
  });

  const carouselCardsArray = [
    { title: carouselData.card1Title, imageSrc: carouselData.card1Image },
    { title: carouselData.card2Title, imageSrc: carouselData.card2Image },
    { title: carouselData.card3Title, imageSrc: carouselData.card3Image },
    { title: carouselData.card4Title, imageSrc: carouselData.card4Image },
    { title: carouselData.card5Title, imageSrc: carouselData.card5Image }
  ].filter(item => item.title !== "");

  // 7. Stats
  const statsData = useSiteContent("stats", {
    subtitle: defaultData.stats.subtitle,
    stat1Value: defaultData.stats.stats[0]?.value || "",
    stat1Suffix: defaultData.stats.stats[0]?.suffix || "",
    stat1Label: defaultData.stats.stats[0]?.label || "",
    stat2Value: defaultData.stats.stats[1]?.value || "",
    stat2Suffix: defaultData.stats.stats[1]?.suffix || "",
    stat2Label: defaultData.stats.stats[1]?.label || "",
    stat3Value: defaultData.stats.stats[2]?.value || "",
    stat3Suffix: defaultData.stats.stats[2]?.suffix || "",
    stat3Label: defaultData.stats.stats[2]?.label || "",
  });

  const statsArray = [
    { value: statsData.stat1Value, suffix: statsData.stat1Suffix, label: statsData.stat1Label },
    { value: statsData.stat2Value, suffix: statsData.stat2Suffix, label: statsData.stat2Label },
    { value: statsData.stat3Value, suffix: statsData.stat3Suffix, label: statsData.stat3Label }
  ].filter(item => item.value !== "");

  // 8. WhyChoose
  const whychooseData = useSiteContent("whychoose", {
    title: defaultData.whychoose.title,
    subtitle: defaultData.whychoose.subtitle,
    description: defaultData.whychoose.description,
    reason1Title: defaultData.whychoose.reasons[0]?.title || "",
    reason1Desc: defaultData.whychoose.reasons[0]?.description || "",
    reason2Title: defaultData.whychoose.reasons[1]?.title || "",
    reason2Desc: defaultData.whychoose.reasons[1]?.description || "",
    reason3Title: defaultData.whychoose.reasons[2]?.title || "",
    reason3Desc: defaultData.whychoose.reasons[2]?.description || "",
    reason4Title: defaultData.whychoose.reasons[3]?.title || "",
    reason4Desc: defaultData.whychoose.reasons[3]?.description || "",
  });

  const whyChooseArray = [
    { title: whychooseData.reason1Title, description: whychooseData.reason1Desc },
    { title: whychooseData.reason2Title, description: whychooseData.reason2Desc },
    { title: whychooseData.reason3Title, description: whychooseData.reason3Desc },
    { title: whychooseData.reason4Title, description: whychooseData.reason4Desc }
  ].filter(item => item.title !== "");

  // 9. FAQ
  const faqData = useSiteContent("faq", {
    faq1Q: defaultData.faq[0]?.question || "",
    faq1A: defaultData.faq[0]?.answer || "",
    faq2Q: defaultData.faq[1]?.question || "",
    faq2A: defaultData.faq[1]?.answer || "",
    faq3Q: defaultData.faq[2]?.question || "",
    faq3A: defaultData.faq[2]?.answer || "",
    faq4Q: defaultData.faq[3]?.question || "",
    faq4A: defaultData.faq[3]?.answer || "",
  });

  const faqArray = [
    { question: faqData.faq1Q, answer: faqData.faq1A },
    { question: faqData.faq2Q, answer: faqData.faq2A },
    { question: faqData.faq3Q, answer: faqData.faq3A },
    { question: faqData.faq4Q, answer: faqData.faq4A }
  ].filter(item => item.question !== "");

  // 10. CTA
  const ctaData = useSiteContent("cta", {
    title: defaultData.cta.title,
    subtitle: defaultData.cta.subtitle,
    buttonText: defaultData.cta.buttonText || "Book a Demo",
    secondaryButtonText: defaultData.cta.secondaryButtonText || "Talk to Sales"
  });

  return (
    <main className="bg-white min-h-screen">
      {/* Section 1: Solution Hero */}
      <SolutionHero 
        title={heroData.title}
        subtitle={heroData.subtitle}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        buttonText={heroData.buttonText}
        secondaryButtonText={heroData.secondaryButtonText}
      />

      {/* Section 2: Industry Challenges */}
      <IndustryChallenges 
        title={challengesData.title}
        subtitle={challengesData.subtitle}
        challenges={challengesArray}
      />

      {/* Section 3: How SELFX Solves */}
      <AlternatingShowcase 
        title={showcaseData.title}
        subtitle={showcaseData.subtitle}
        items={showcaseItemsArray}
      />

      {/* Section 4: Benefits */}
      <SolutionBenefits 
        title={benefitsData.title}
        subtitle={benefitsData.subtitle}
        imageSrc={benefitsData.imageSrc || undefined}
        videoSrc={benefitsData.videoSrc || undefined}
        benefits={benefitsArray}
      />

      {/* Section 5: Key Features */}
      <IconGrid 
        title={iconGridData.title}
        subtitle={iconGridData.subtitle}
        items={iconGridArray}
      />

      {/* Section 6: Ideal Locations */}
      <VerticalCardCarousel 
        title={carouselData.title}
        subtitle={carouselData.subtitle}
        cards={carouselCardsArray}
      />

      {/* Section 7: Stats / Metrics */}
      <SolutionStats 
        subtitle={statsData.subtitle}
        stats={statsArray}
      />

      {/* Section 8: Why Choose */}
      <WhyChooseSelfX 
        title={whychooseData.title}
        subtitle={whychooseData.subtitle}
        description={whychooseData.description}
        reasons={whyChooseArray}
      />

      {/* Section 9: FAQ */}
      <FAQAccordion 
        faqs={faqArray}
      />

      {/* Section 10: Final CTA */}
      <FinalCTA 
        title={ctaData.title}
        subtitle={ctaData.subtitle}
        buttonText={ctaData.buttonText}
        secondaryButtonText={ctaData.secondaryButtonText}
      />
    </main>
  );
}
