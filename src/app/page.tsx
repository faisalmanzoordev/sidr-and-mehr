import { Hero } from '@/components/home/Hero'
import { BrandStory } from '@/components/home/BrandStory'
import { FeaturedCollection } from '@/components/home/FeaturedCollection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { BeyondFragrance } from '@/components/home/BeyondFragrance'
import { FinalCta } from '@/components/home/FinalCta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <PhilosophySection />
      <BeyondFragrance />
      <FinalCta />
    </>
  )
}
