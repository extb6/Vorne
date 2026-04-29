"use client"

import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  DollarSign,
  Globe,
  Zap,
  ArrowRight,
  CandlestickChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

const tradingPairs = [
  { pair: "EUR/USD", price: "1.0847", change: "+0.12%", isUp: true },
  { pair: "GBP/USD", price: "1.2634", change: "+0.08%", isUp: true },
  { pair: "BTC/USDT", price: "67,432.50", change: "-0.23%", isUp: false },
  { pair: "ETH/USDT", price: "3,521.80", change: "+1.45%", isUp: true },
  { pair: "Gold", price: "2,341.20", change: "+0.32%", isUp: true },
  { pair: "USD/JPY", price: "154.32", change: "-0.15%", isUp: false },
]

const features = [
  {
    icon: CandlestickChart,
    title: "Advanced Charts",
    description: "Professional-grade charting with 100+ indicators",
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Lightning-fast order execution under 10ms",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description: "Access forex, crypto, and commodity markets 24/7",
  },
  {
    icon: DollarSign,
    title: "Up to 100x Leverage",
    description: "Maximize your trading potential with high leverage",
  },
]

export function VirtualTradingSection() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Live Trading Terminal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Trade Futures &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Forex
              </span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 text-pretty">
              Access global markets with our professional trading terminal. Trade crypto futures,
              forex pairs, and commodities with institutional-grade tools and execution.
            </p>
          </div>
        </AnimatedSection>

        {/* Trading Terminal Preview */}
        <AnimatedSection animation="scale" delay={200}>
          <div className="rounded-2xl bg-card border border-border overflow-hidden mb-8 md:mb-12">
            {/* Terminal Header */}
            <div className="flex items-center justify-between p-3 md:p-4 border-b border-border bg-secondary/30">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs md:text-sm font-medium text-foreground">
                  VornexChain Trading Terminal
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>
            </div>

            {/* Live Prices Grid */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-6 md:mb-8">
                {tradingPairs.map((item, index) => (
                  <AnimatedSection key={index} animation="fade-up" delay={index * 50 + 300}>
                    <div className="p-3 md:p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs md:text-sm font-medium text-foreground">
                          {item.pair}
                        </span>
                        {item.isUp ? (
                          <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                        )}
                      </div>
                      <div className="text-sm md:text-lg font-bold text-foreground">{item.price}</div>
                      <div className={`text-xs md:text-sm ${item.isUp ? "text-green-500" : "text-red-500"}`}>
                        {item.change}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="relative h-48 md:h-64 rounded-xl bg-secondary/20 border border-border mb-6 md:mb-8 overflow-hidden">
                {/* Fake chart lines */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,180 Q50,160 100,140 T200,120 T300,100 T400,80 T500,90 T600,70 T700,50 T800,60 T900,40 T1000,30 L1000,256 L0,256 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M0,180 Q50,160 100,140 T200,120 T300,100 T400,80 T500,90 T600,70 T700,50 T800,60 T900,40 T1000,30"
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                </svg>

                {/* Chart overlay info */}
                <div className="absolute top-3 md:top-4 left-3 md:left-4 flex items-center gap-2 md:gap-4">
                  <div className="px-2 md:px-3 py-1 rounded-lg bg-background/80 backdrop-blur-sm">
                    <span className="text-[10px] md:text-xs text-muted-foreground">BTC/USDT</span>
                    <span className="ml-1 md:ml-2 text-xs md:text-sm font-bold text-foreground">
                      67,432.50
                    </span>
                  </div>
                  <div className="px-2 md:px-3 py-1 rounded-lg bg-green-500/20">
                    <span className="text-[10px] md:text-xs text-green-500">+2.34%</span>
                  </div>
                </div>

                {/* Time indicators */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 flex justify-between text-[10px] md:text-xs text-muted-foreground">
                  <span>1H</span>
                  <span>4H</span>
                  <span>1D</span>
                  <span>1W</span>
                  <span>1M</span>
                </div>
              </div>


            </div>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100 + 400}>
              <div className="p-5 md:p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
