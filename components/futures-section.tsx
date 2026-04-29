"use client"

import { ArrowUpRight, ArrowDownRight, Layers, RefreshCw, Wallet, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

export function FuturesSection() {
  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <AnimatedSection animation="fade-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 border border-accent/20">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Futures Trading</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight text-balance">
                How{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Xchain
                </span>{" "}
                Combines Futures for Passive Income
              </h2>

              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
                {"Xchain leverages advanced futures trading strategies to generate consistent passive income for our users. By combining long and short positions across multiple markets, our AI creates a balanced portfolio that profits regardless of market direction."}
              </p>
            </AnimatedSection>

            <div className="space-y-4 mb-6 md:mb-8">
              {[
                {
                  icon: ArrowUpRight,
                  title: "Long Positions",
                  description: "Xchain identifies undervalued assets and opens long positions to profit from upward price movements.",
                  color: "text-green-500",
                  bg: "bg-green-500/20",
                },
                {
                  icon: ArrowDownRight,
                  title: "Short Positions",
                  description: "During bearish conditions, Xchain hedges your portfolio by opening short positions to capture downward moves.",
                  color: "text-red-500",
                  bg: "bg-red-500/20",
                },
                {
                  icon: RefreshCw,
                  title: "Automated Rebalancing",
                  description: "The AI continuously rebalances positions to maintain optimal risk-reward ratios and maximize returns.",
                  color: "text-primary",
                  bg: "bg-primary/20",
                },
                {
                  icon: Wallet,
                  title: "Daily Returns",
                  description: "Earn consistent daily returns deposited directly to your account, ranging from 2% to 10% based on your plan.",
                  color: "text-accent",
                  bg: "bg-accent/20",
                },
              ].map((item, index) => (
                <AnimatedSection key={item.title} animation="fade-right" delay={index * 100 + 200}>
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center flex-shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>


          </div>

          {/* Visual */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="p-4 md:p-6 rounded-2xl bg-secondary/30 border border-border">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="font-semibold text-sm md:text-base">Live Futures Performance</h3>
                  <span className="text-xs text-muted-foreground">Last 24h</span>
                </div>

                {/* Simulated chart bars */}
                <div className="flex items-end gap-1 md:gap-2 h-32 md:h-40 mb-4 md:mb-6">
                  {[65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88, 82].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-primary/50 to-primary transition-all hover:from-primary/70 hover:to-primary"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 md:gap-4">
                  <div className="p-2 md:p-3 rounded-lg bg-background/50">
                    <div className="text-[10px] md:text-xs text-muted-foreground mb-1">Total Profit</div>
                    <div className="text-sm md:text-lg font-bold text-green-500">+$847.5K</div>
                  </div>
                  <div className="p-2 md:p-3 rounded-lg bg-background/50">
                    <div className="text-[10px] md:text-xs text-muted-foreground mb-1">Win Rate</div>
                    <div className="text-sm md:text-lg font-bold text-primary">94.2%</div>
                  </div>
                  <div className="p-2 md:p-3 rounded-lg bg-background/50">
                    <div className="text-[10px] md:text-xs text-muted-foreground mb-1">Active Trades</div>
                    <div className="text-sm md:text-lg font-bold text-accent">1,247</div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 p-3 md:p-4 rounded-xl bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-green-500" />
                  <span className="text-xs md:text-sm font-semibold text-green-500">+12.5% Today</span>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 p-3 md:p-4 rounded-xl bg-primary/10 border border-primary/20 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  <span className="text-xs md:text-sm font-semibold text-primary">Auto-Trading Active</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
