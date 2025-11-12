import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Micron Plus</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Leading global supplier of premium industrial minerals with decades of industry expertise.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/company-facility.jpg"
                alt="Micron Plus Industrial Facility"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                At Micron Plus, we're committed to delivering premium industrial minerals that empower our clients to
                achieve excellence in their production processes. Our mission is to be the trusted global partner for
                precision mineral solutions.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                With operations spanning continents and partnerships with industry leaders, we combine technical
                expertise with customer-centric service to drive innovation and reliability in every transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                desc: "Unwavering commitment to superior product quality and consistency.",
              },
              { title: "Global Reliability", desc: "Dependable supply chain operations ensuring timely deliveries." },
              { title: "Technical Expertise", desc: "Deep industry knowledge driving innovation and problem-solving." },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-border">
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Pharmaceuticals",
              "Cosmetics",
              "Paints & Coatings",
              "Plastics",
              "Ceramics",
              "Construction",
              "Agriculture",
              "Food & Beverage",
            ].map((industry, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-border text-center font-semibold text-foreground hover:border-primary transition-colors cursor-pointer"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
