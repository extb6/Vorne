"use client"

import { useEffect, useState } from "react"
import { ArrowRight, TrendingUp, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

const words = ["Trade", "Invest", "Profit", "Grow", "Dominate"]

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? 50 : 120
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/30 to-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50 pointer-events-none" />

      {/* Top stats card */}
      <AnimatedSection animation="fade-down" delay={100}>
        <div className="mb-8 flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/5 border border-primary/20 backdrop-blur-sm">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-xs md:text-sm text-muted-foreground font-medium">Trusted by 150K+ Traders Worldwide</span>
        </div>
      </AnimatedSection>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main Heading */}
        <AnimatedSection animation="scale" delay={200}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight text-balance">
            <span className="text-foreground">Master Global</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            <span className="text-primary animate-pulse ml-2">_</span>
          </h1>
        </AnimatedSection>

        {/* Subheading */}
        <AnimatedSection animation="fade-up" delay={300}>
          <p className="text-base md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-medium px-2">
            Experience lightning-fast execution, real-time market analysis, and advanced trading tools. VornexChain brings professional-grade trading to everyone.
          </p>
        </AnimatedSection>

        {/* Key Features */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10 max-w-3xl">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">Instant Execution</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">Sub-millisecond trade execution</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">Smart Analytics</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">AI-powered market insights</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">Zero Spread</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">0% commission always</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Row */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-10 max-w-3xl">
            <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
              <div className="text-2xl md:text-4xl font-black text-foreground mb-2">$50B+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Daily Volume</div>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-center">
              <div className="text-2xl md:text-4xl font-black text-foreground mb-2">150+</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Countries</div>
            </div>
            <div className="p-4 md:p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-400/20 text-center">
              <div className="text-2xl md:text-4xl font-black text-foreground mb-2">24/7</div>
              <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">Support</div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-8 py-6 md:py-7 text-base md:text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all rounded-xl font-semibold shadow-lg hover:shadow-xl"
            >
              Start Trading Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 md:py-7 text-base md:text-lg rounded-xl font-semibold border-primary/30 hover:border-primary/60"
            >
              Watch Demo
            </Button>
          </div>
        </AnimatedSection>

        {/* Trust badge */}
        <AnimatedSection animation="fade-up" delay={700}>
          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <p className="text-xs md:text-sm text-muted-foreground mb-4">Regulated & Licensed by Global Financial Authorities</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-xs font-semibold text-foreground/70">⭐ FCA Regulated</span>
              <span className="text-xs font-semibold text-foreground/70">⭐ ISO 27001</span>
              <span className="text-xs font-semibold text-foreground/70">⭐ Level 3 AML</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
