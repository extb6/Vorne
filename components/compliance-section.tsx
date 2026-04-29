"use client"

import { useState } from "react"
import { Shield, FileText, Award, CheckCircle, X, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"

const documents = [
  {
    id: 1,
    title: "Financial Services License",
    description: "Official license to operate as a regulated financial services provider",
    icon: Award,
    pdfUrl: "/documents/financial-license.pdf",
  },
  {
    id: 3,
    title: "Terms of Service",
    description: "Complete terms and conditions for platform usage",
    icon: FileText,
    pdfUrl: "/documents/terms-of-service.pdf",
  },
  {
    id: 4,
    title: "Privacy Policy",
    description: "Data protection and privacy compliance documentation",
    icon: FileText,
    pdfUrl: "/documents/privacy-policy.pdf",
  },
]

const complianceFeatures = [
  "Registered with Financial Regulatory Authorities",
  "256-bit SSL Encryption",
  "Cold Storage for Digital Assets",
  "Regular Third-Party Audits",
  "Segregated Client Funds",
  "GDPR Compliant",
]

export function ComplianceSection() {
  const [selectedDoc, setSelectedDoc] = useState<(typeof documents)[0] | null>(null)

  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm text-green-500 font-medium">Fully Regulated Platform</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Regulated. Compliant.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Trusted.
              </span>
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 text-pretty">
              VornexChain operates under strict regulatory oversight, ensuring your investments are
              protected by industry-leading security standards and legal compliance.
            </p>
          </div>
        </AnimatedSection>

        {/* Compliance Features */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16">
            {complianceFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-xl bg-secondary/30 border border-border"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span className="text-xs md:text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {documents.map((doc, index) => (
            <AnimatedSection key={doc.id} animation="fade-up" delay={index * 100 + 300}>
              <div className="p-5 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <doc.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground mb-4">{doc.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedDoc(doc)}
                      className="border-primary/50 text-primary hover:bg-primary/10 text-xs md:text-sm"
                    >
                      <FileText className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      View Document
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust Badges */}
        <AnimatedSection animation="scale" delay={600}>
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-3 md:gap-8">
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-secondary/50 border border-border">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
              <span className="text-xs md:text-sm text-muted-foreground">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-secondary/50 border border-border">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="text-xs md:text-sm text-muted-foreground">Licensed Operator</span>
            </div>
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg bg-secondary/50 border border-border">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent" />
              <span className="text-xs md:text-sm text-muted-foreground">Verified Platform</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* PDF Viewer Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[80vh] bg-card rounded-2xl border border-border overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-3 md:p-4 border-b border-border">
              <div className="flex items-center gap-2 md:gap-3">
                <selectedDoc.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {selectedDoc.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={selectedDoc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
            {/* PDF Embed */}
            <div className="h-[calc(100%-52px)] md:h-[calc(100%-60px)] bg-secondary/20">
              <iframe src={selectedDoc.pdfUrl} className="w-full h-full" title={selectedDoc.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
