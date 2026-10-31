import { KioskoHero } from "@/components/kiosko/hero"
import { KioskoChapters } from "@/components/kiosko/chapters"
import { KioskoRack } from "@/components/kiosko/rack"
import { KioskoHowItWorks } from "@/components/kiosko/how-it-works"
import { KioskoFaq } from "@/components/kiosko/faq"
import { KioskoCta } from "@/components/kiosko/cta"
import { KioskoFooter } from "@/components/kiosko/footer"
import { IdentityGate } from "@/components/identity-gate"
import { Reveal } from "@/components/reveal"

export default function Page() {
  return (
    <main>
      <KioskoHero />
      <Reveal>
        <KioskoChapters />
      </Reveal>
      <Reveal>
        <KioskoRack />
      </Reveal>
      <Reveal>
        <KioskoHowItWorks />
      </Reveal>
      <Reveal>
        <KioskoFaq />
      </Reveal>
      <Reveal>
        <KioskoCta />
      </Reveal>
      <KioskoFooter />
      <IdentityGate from="kiosko" />
    </main>
  )
}
