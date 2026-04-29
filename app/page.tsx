import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { XchainSection } from "@/components/xchain-section"
import { FuturesSection } from "@/components/futures-section"
import { InvestmentPlans } from "@/components/investment-plans"
import { InvestmentCalculator } from "@/components/investment-calculator"
import { VirtualTradingSection } from "@/components/virtual-trading-section"
import { ComplianceSection } from "@/components/compliance-section"
import { TradingSection } from "@/components/trading-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { CookieConsent } from "@/components/cookie-consent"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <XchainSection />
      <FuturesSection />
      <InvestmentPlans />
      <InvestmentCalculator />
      <VirtualTradingSection />
      <ComplianceSection />
      <TradingSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
      <CookieConsent />
    </main>
  )
}
