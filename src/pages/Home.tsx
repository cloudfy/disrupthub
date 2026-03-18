import { Hero } from '@/components/sections/Hero'
import { ValueProps } from '@/components/sections/ValueProps'
import { WhatWeDo } from '@/components/sections/WhatWeDo'
import { CaseStories } from '@/components/sections/CaseStories'
import { CTABanner } from '@/components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <WhatWeDo />
      <CaseStories />
      <CTABanner />
    </>
  )
}
