import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { XchainSection } from "@/components/xchain-section"
import { FuturesSection } from "@/components/futures-section"
import { InvestmentPlans } from "@/components/investment-plans"
import { InvestmentCalculator } from "@/components/investment-calculator"
import { TradingSection } from "@/components/trading-section"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <XchainSection />
      <FuturesSection />
      <InvestmentPlans />
      <InvestmentCalculator />
      <TradingSection />
      <FeaturesSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
