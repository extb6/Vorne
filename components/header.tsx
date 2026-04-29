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
          <a href="https://app.vornexchain.com/trading/futures" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
            Futures Trading
          </a>
          <a href="https://app.vornexchain.com/trading/margin" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
            Margin Trading
          </a>
          <a href="https://app.vornexchain.com/trading/forex" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
            Forex Trading
          </a>
          <div className="group relative">
            <button className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2">
              Company
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {companyItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-foreground hover:bg-secondary/50 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex gap-4">
          <a href="https://app.vornexchain.com/login" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Sign In</Button>
          </a>
          <a href="https://app.vornexchain.com/register" target="_blank" rel="noopener noreferrer">
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors text-sm block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Auth Section */}
              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <a href="https://app.vornexchain.com/login" target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </a>
                <a href="https://app.vornexchain.com/register" target="_blank" rel="noopener noreferrer" className="block">
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
