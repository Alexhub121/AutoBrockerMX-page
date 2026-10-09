import { Hero } from "@/components/home/hero"
import { ValueProps } from "@/components/home/value-props"
import { FeaturedCars } from "@/components/home/featured-cars"
import { HowItWorks } from "@/components/home/how-it-works"
import { CtaSection } from "@/components/home/cta-section"
import { BrandBand } from "@/components/home/brand-band"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <BrandBand />
      <HowItWorks />
      <FeaturedCars />
      <CtaSection />
    </>
  )
}
