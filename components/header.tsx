"use client"

import { useState } from "react"
import { Menu, ChevronDown, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tradeSectorsOpen, setTradeSectorsOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  const tradeSectorItems = [
    {
      category: "Sectors",
      items: [
        { label: "Stocks & ETFs", href: "/trade-sectors/stocks" },
        { label: "Crypto Assets", href: "/trade-sectors/crypto" },
        { label: "Real Estate", href: "/trade-sectors/real-estate" },
        { label: "Fixed Income", href: "/trade-sectors/bonds" },
        { label: "Commodities", href: "/trade-sectors/commodities" },
        { label: "Business & Startups", href: "/trade-sectors/startups" },
        { label: "Arts & Collectibles", href: "/trade-sectors/collectibles" },
        { label: "Gaming & Esports", href: "/trade-sectors/gaming" },
        { label: "Cash & Savings", href: "/trade-sectors/savings" },
      ],
    },
    {
      category: "Capital Instruments",
      items: [
        { label: "Stocks", href: "/instruments/stocks" },
        { label: "Bonds", href: "/instruments/bonds" },
        { label: "ETFs", href: "/instruments/etfs" },
      ],
    },
    {
      category: "Managed Portfolios",
      items: [{ label: "Investment Plans", href: "/portfolios/plans" }],
    },
  ]

  const companyItems = [
    { label: "About Us", href: "https://app.vornexchain.com/about" },
    { label: "License & Regulation", href: "https://app.vornexchain.com/license" },
    { label: "Privacy Policy", href: "https://app.vornexchain.com/privacy-policy" },
    { label: "Contact", href: "https://app.vornexchain.com/contact" },
  ]

  const tradingItems = [
    { label: "Futures Trading", href: "https://app.vornexchain.com/trading/futures" },
    { label: "Margin Trading", href: "https://app.vornexchain.com/trading/margin" },
    { label: "Forex Trading", href: "https://app.vornexchain.com/trading/forex" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="VornexChain Logo"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="/trade-sectors" className="text-foreground hover:text-primary transition-colors font-medium">
            Trade Sectors
          </a>
          <a href="/futures-trading" className="text-foreground hover:text-primary transition-colors font-medium">
            Futures Trading
          </a>
          <a href="/margin-trading" className="text-foreground hover:text-primary transition-colors font-medium">
            Margin Trading
          </a>
          <a href="/forex-trading" className="text-foreground hover:text-primary transition-colors font-medium">
            Forex Trading
          </a>
          <a href="/company" className="text-foreground hover:text-primary transition-colors font-medium">
            Company
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex gap-4">
          <a href="/login">
            <Button variant="outline">Login</Button>
          </a>
          <a href="/open-account">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Open Account
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border max-h-[calc(100vh-70px)] overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-1">
              {/* Home */}
              <a
                href="/"
                className="px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                Home
              </a>

              {/* Trade Sectors - Collapsible */}
              <div>
                <button
                  onClick={() => setTradeSectorsOpen(!tradeSectorsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  <span>Trade Sectors</span>
                  {tradeSectorsOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {/* Trade Sectors Submenu */}
                {tradeSectorsOpen && (
                  <div className="pl-4 mt-2 space-y-3 border-l border-border">
                    {tradeSectorItems.map((section) => (
                      <div key={section.category}>
                        <h4 className="px-4 py-2 text-white font-semibold text-sm">
                          {section.category}
                        </h4>
                        <ul className="space-y-1">
                          {section.items.map((item) => (
                            <li key={typeof item === 'string' ? item : item.label}>
                              <a
                                href={typeof item === 'string' ? '#' : item.href}
                                className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm block"
                              >
                                {typeof item === 'string' ? item : item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Trading Items - Direct Links */}
              {tradingItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              {/* Company - Collapsible */}
              <div>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  <span>Company</span>
                  {companyOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>

                {/* Company Submenu */}
                {companyOpen && (
                  <div className="pl-4 mt-2 space-y-1 border-l border-border">
                    {companyItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Login Section */}
              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <p className="px-4 text-foreground font-semibold text-center">Login</p>
                <a href="/login" className="block">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </a>
                <a href="/open-account" className="block">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold py-3">
                    Open Account
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
