import CaseStudiesHero from "./case-studies-hero";
import EngineeringPrinciples from "./engineering-principles";
import CaseStudiesList from "./case-studies-list";
import CaseStudiesCTA from "./case-studies-cta";

export default function CaseStudiesSection() {
  return (
    <>
      <CaseStudiesHero />
      <EngineeringPrinciples />
      <CaseStudiesList />
      <CaseStudiesCTA />
    </>
  );
}