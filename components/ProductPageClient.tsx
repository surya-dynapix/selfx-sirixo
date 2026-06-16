"use client";

import { useSiteContent } from "@/context/SiteContentContext";
import ProductHero from "./ProductHero";
import ProductChallenge from "./ProductChallenge";
import ProductWorkflow from "./ProductWorkflow";
import ProductFeatures from "./ProductFeatures";
import ProductImpact from "./ProductImpact";
import ProductUseCases from "./ProductUseCases";
import ProductEcosystem from "./ProductEcosystem";
import ProductAnalytics from "./ProductAnalytics";
import ProductSuccess from "./ProductSuccess";
import UniversalFaq from "./UniversalFaq";
import FinalCTA from "./FinalCTA";
import { ProductData } from "@/lib/productData";

import * as LucideIcons from "lucide-react";

interface ProductPageClientProps {
  productKey: string;
  defaultData: ProductData;
}

export default function ProductPageClient({ productKey, defaultData }: ProductPageClientProps) {
  
  // 1. Hero
  const heroData = useSiteContent("hero", {
    productName: defaultData.productName,
    headline: defaultData.hero.headline,
    description: defaultData.hero.description,
    imageSrc: defaultData.hero.imageSrc,
    highlights: defaultData.hero.highlights.join(","),
    primaryCtaText: defaultData.hero.primaryCtaText || "Book Demo",
    secondaryCtaText: defaultData.hero.secondaryCtaText || "Explore Features"
  });

  const parsedHighlights = typeof heroData.highlights === "string" 
    ? heroData.highlights.split(",").map((s: string) => s.trim()).filter(Boolean)
    : defaultData.hero.highlights;

  // 2. Business Challenge
  const challengeData = useSiteContent("challenge", {
    title: defaultData.challenge.title,
    subtitle: defaultData.challenge.subtitle,
    imageSrc: defaultData.challenge.imageSrc,
    challenge1Title: defaultData.challenge.challenges[0]?.title || "",
    challenge1Desc: defaultData.challenge.challenges[0]?.description || "",
    challenge2Title: defaultData.challenge.challenges[1]?.title || "",
    challenge2Desc: defaultData.challenge.challenges[1]?.description || "",
    challenge3Title: defaultData.challenge.challenges[2]?.title || "",
    challenge3Desc: defaultData.challenge.challenges[2]?.description || "",
    challenge4Title: defaultData.challenge.challenges[3]?.title || "",
    challenge4Desc: defaultData.challenge.challenges[3]?.description || "",
  });

  const challengesArray = [
    { title: challengeData.challenge1Title, description: challengeData.challenge1Desc },
    { title: challengeData.challenge2Title, description: challengeData.challenge2Desc },
    { title: challengeData.challenge3Title, description: challengeData.challenge3Desc },
    { title: challengeData.challenge4Title, description: challengeData.challenge4Desc }
  ].filter(item => item.title !== "");

  // 3. How It Works Workflow
  const workflowData = useSiteContent("workflow", {
    title: defaultData.workflow.title,
    subtitle: defaultData.workflow.subtitle,
    step1Title: defaultData.workflow.steps[0]?.title || "",
    step1Desc: defaultData.workflow.steps[0]?.description || "",
    step2Title: defaultData.workflow.steps[1]?.title || "",
    step2Desc: defaultData.workflow.steps[1]?.description || "",
    step3Title: defaultData.workflow.steps[2]?.title || "",
    step3Desc: defaultData.workflow.steps[2]?.description || "",
    step4Title: defaultData.workflow.steps[3]?.title || "",
    step4Desc: defaultData.workflow.steps[3]?.description || "",
  });

  const stepsArray = [
    { title: workflowData.step1Title, description: workflowData.step1Desc },
    { title: workflowData.step2Title, description: workflowData.step2Desc },
    { title: workflowData.step3Title, description: workflowData.step3Desc },
    { title: workflowData.step4Title, description: workflowData.step4Desc }
  ].filter(item => item.title !== "");

  // 4. Core Features
  const featuresData = useSiteContent("features", {
    title: defaultData.features.title,
    subtitle: defaultData.features.subtitle,
    feat1Icon: defaultData.features.features[0]?.icon || "Activity",
    feat1Title: defaultData.features.features[0]?.title || "",
    feat1Desc: defaultData.features.features[0]?.description || "",
    feat2Icon: defaultData.features.features[1]?.icon || "Activity",
    feat2Title: defaultData.features.features[1]?.title || "",
    feat2Desc: defaultData.features.features[1]?.description || "",
    feat3Icon: defaultData.features.features[2]?.icon || "Activity",
    feat3Title: defaultData.features.features[2]?.title || "",
    feat3Desc: defaultData.features.features[2]?.description || "",
    feat4Icon: defaultData.features.features[3]?.icon || "Activity",
    feat4Title: defaultData.features.features[3]?.title || "",
    feat4Desc: defaultData.features.features[3]?.description || "",
    feat5Icon: defaultData.features.features[4]?.icon || "Activity",
    feat5Title: defaultData.features.features[4]?.title || "",
    feat5Desc: defaultData.features.features[4]?.description || "",
    feat6Icon: defaultData.features.features[5]?.icon || "Activity",
    feat6Title: defaultData.features.features[5]?.title || "",
    feat6Desc: defaultData.features.features[5]?.description || "",
    feat7Icon: defaultData.features.features[6]?.icon || "Activity",
    feat7Title: defaultData.features.features[6]?.title || "",
    feat7Desc: defaultData.features.features[6]?.description || "",
    feat8Icon: defaultData.features.features[7]?.icon || "Activity",
    feat8Title: defaultData.features.features[7]?.title || "",
    feat8Desc: defaultData.features.features[7]?.description || "",
  });

  const getLucideIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    return IconComponent || LucideIcons.Activity;
  };

  const featuresArray = [
    { icon: getLucideIcon(featuresData.feat1Icon), title: featuresData.feat1Title, description: featuresData.feat1Desc },
    { icon: getLucideIcon(featuresData.feat2Icon), title: featuresData.feat2Title, description: featuresData.feat2Desc },
    { icon: getLucideIcon(featuresData.feat3Icon), title: featuresData.feat3Title, description: featuresData.feat3Desc },
    { icon: getLucideIcon(featuresData.feat4Icon), title: featuresData.feat4Title, description: featuresData.feat4Desc },
    { icon: getLucideIcon(featuresData.feat5Icon), title: featuresData.feat5Title, description: featuresData.feat5Desc },
    { icon: getLucideIcon(featuresData.feat6Icon), title: featuresData.feat6Title, description: featuresData.feat6Desc },
    { icon: getLucideIcon(featuresData.feat7Icon), title: featuresData.feat7Title, description: featuresData.feat7Desc },
    { icon: getLucideIcon(featuresData.feat8Icon), title: featuresData.feat8Title, description: featuresData.feat8Desc }
  ].filter(item => item.title !== "");

  // 5. Business Impact
  const impactData = useSiteContent("impact", {
    title: defaultData.impact.title,
    subtitle: defaultData.impact.subtitle,
    metric1Value: defaultData.impact.metrics[0]?.value || "",
    metric1Suffix: defaultData.impact.metrics[0]?.suffix || "",
    metric1Label: defaultData.impact.metrics[0]?.label || "",
    metric2Value: defaultData.impact.metrics[1]?.value || "",
    metric2Suffix: defaultData.impact.metrics[1]?.suffix || "",
    metric2Label: defaultData.impact.metrics[1]?.label || "",
    metric3Value: defaultData.impact.metrics[2]?.value || "",
    metric3Suffix: defaultData.impact.metrics[2]?.suffix || "",
    metric3Label: defaultData.impact.metrics[2]?.label || "",
    metric4Value: defaultData.impact.metrics[3]?.value || "",
    metric4Suffix: defaultData.impact.metrics[3]?.suffix || "",
    metric4Label: defaultData.impact.metrics[3]?.label || "",
  });

  const metricsArray = [
    { value: impactData.metric1Value, suffix: impactData.metric1Suffix, label: impactData.metric1Label },
    { value: impactData.metric2Value, suffix: impactData.metric2Suffix, label: impactData.metric2Label },
    { value: impactData.metric3Value, suffix: impactData.metric3Suffix, label: impactData.metric3Label },
    { value: impactData.metric4Value, suffix: impactData.metric4Suffix, label: impactData.metric4Label }
  ].filter(item => item.value !== "");

  // 6. Industries & Use Cases
  const useCasesData = useSiteContent("useCases", {
    title: defaultData.useCases.title,
    subtitle: defaultData.useCases.subtitle,
    case1Title: defaultData.useCases.useCases[0]?.title || "",
    case1Image: defaultData.useCases.useCases[0]?.imageSrc || "",
    case2Title: defaultData.useCases.useCases[1]?.title || "",
    case2Image: defaultData.useCases.useCases[1]?.imageSrc || "",
    case3Title: defaultData.useCases.useCases[2]?.title || "",
    case3Image: defaultData.useCases.useCases[2]?.imageSrc || "",
  });

  const useCasesArray = [
    { title: useCasesData.case1Title, imageSrc: useCasesData.case1Image },
    { title: useCasesData.case2Title, imageSrc: useCasesData.case2Image },
    { title: useCasesData.case3Title, imageSrc: useCasesData.case3Image }
  ].filter(item => item.title !== "");

  // 8. Analytics & Control
  const analyticsData = useSiteContent("analytics", {
    title: defaultData.analytics.title,
    subtitle: defaultData.analytics.subtitle,
    description: defaultData.analytics.description,
    imageSrc: defaultData.analytics.imageSrc
  });

  // 9. Customer Success
  const successData = useSiteContent("success", {
    title: defaultData.success.title,
    subtitle: defaultData.success.subtitle,
    quote: defaultData.success.quote,
    author: defaultData.success.author,
    role: defaultData.success.role,
    challenge: defaultData.success.challenge,
    solution: defaultData.success.solution,
    results: defaultData.success.results.join(",")
  });

  const parsedResults = typeof successData.results === "string"
    ? successData.results.split(",").map((s: string) => s.trim()).filter(Boolean)
    : defaultData.success.results;

  // 10. FAQs
  const faqsData = useSiteContent("faqs", {
    title: defaultData.productName + " FAQs",
    faq1Q: defaultData.faqs[0]?.q || "",
    faq1A: defaultData.faqs[0]?.a || "",
    faq2Q: defaultData.faqs[1]?.q || "",
    faq2A: defaultData.faqs[1]?.a || "",
    faq3Q: defaultData.faqs[2]?.q || "",
    faq3A: defaultData.faqs[2]?.a || "",
    faq4Q: defaultData.faqs[3]?.q || "",
    faq4A: defaultData.faqs[3]?.a || "",
    faq5Q: defaultData.faqs[4]?.q || "",
    faq5A: defaultData.faqs[4]?.a || "",
    faq6Q: defaultData.faqs[5]?.q || "",
    faq6A: defaultData.faqs[5]?.a || "",
    faq7Q: defaultData.faqs[6]?.q || "",
    faq7A: defaultData.faqs[6]?.a || "",
    faq8Q: defaultData.faqs[7]?.q || "",
    faq8A: defaultData.faqs[7]?.a || "",
  });

  const faqsArray = [
    { q: faqsData.faq1Q, a: faqsData.faq1A },
    { q: faqsData.faq2Q, a: faqsData.faq2A },
    { q: faqsData.faq3Q, a: faqsData.faq3A },
    { q: faqsData.faq4Q, a: faqsData.faq4A },
    { q: faqsData.faq5Q, a: faqsData.faq5A },
    { q: faqsData.faq6Q, a: faqsData.faq6A },
    { q: faqsData.faq7Q, a: faqsData.faq7A },
    { q: faqsData.faq8Q, a: faqsData.faq8A }
  ].filter(item => item.q !== "");

  // 11. Final CTA
  const ctaData = useSiteContent("cta", {
    title: defaultData.cta.title,
    subtitle: defaultData.cta.subtitle
  });

  return (
    <>
      {/* Section 1: Hero */}
      <ProductHero 
        productName={heroData.productName}
        headline={heroData.headline}
        description={heroData.description}
        imageSrc={heroData.imageSrc}
        highlights={parsedHighlights}
        primaryCtaText={heroData.primaryCtaText}
        secondaryCtaText={heroData.secondaryCtaText}
      />

      {/* Section 2: Business Challenge */}
      <ProductChallenge 
        title={challengeData.title}
        subtitle={challengeData.subtitle}
        imageSrc={challengeData.imageSrc}
        challenges={challengesArray}
      />

      {/* Section 3: How It Works */}
      <ProductWorkflow 
        title={workflowData.title}
        subtitle={workflowData.subtitle}
        steps={stepsArray}
      />

      {/* Section 4: Core Features */}
      <ProductFeatures 
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        features={featuresArray}
      />

      {/* Section 5: Business Impact */}
      <ProductImpact 
        title={impactData.title}
        subtitle={impactData.subtitle}
        metrics={metricsArray}
      />

      {/* Section 6: Industries & Use Cases */}
      <ProductUseCases 
        title={useCasesData.title}
        subtitle={useCasesData.subtitle}
        useCases={useCasesArray}
      />

      {/* Section 7: Ecosystem Flow */}
      <ProductEcosystem currentProduct={heroData.productName} />

      {/* Section 8: Analytics & Control */}
      <ProductAnalytics 
        title={analyticsData.title}
        subtitle={analyticsData.subtitle}
        description={analyticsData.description}
        imageSrc={analyticsData.imageSrc}
      />

      {/* Section 9: Customer Success */}
      <ProductSuccess 
        title={successData.title}
        subtitle={successData.subtitle}
        quote={successData.quote}
        author={successData.author}
        role={successData.role}
        challenge={successData.challenge}
        solution={successData.solution}
        results={parsedResults}
      />

      {/* Section 10: FAQ */}
      <section className="py-24 px-6 bg-white border-t border-zinc-200">
        <UniversalFaq 
          title={faqsData.title}
          items={faqsArray}
        />
      </section>

      {/* Section 11: Final CTA */}
      <FinalCTA 
        title={ctaData.title}
        subtitle={ctaData.subtitle}
        showProductButtons={true}
      />
    </>
  );
}
