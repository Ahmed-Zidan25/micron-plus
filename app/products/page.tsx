import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ProductsPage() {
  const products = [
    {
      name: "Natural Calcium Carbonate Powder (GCC)",
      specs: ["Ultra-fine grading: 0.5-5 microns", "Brightness: 95-98%", "Purity: >97% CaCO3"],
      applications: ["Pharmaceuticals", "Cosmetics", "Paints & Coatings", "Plastics", "Food & Beverage"],
      description:
        "Premium ground calcium carbonate engineered for precision applications requiring exceptional whiteness and fineness.",
      image: "/images/gcc-product.jpg",
    },
    {
      name: "Coated Calcium Carbonate (Stearate Coated)",
      specs: ["Particle size: 0.5-10 microns", "Coating: Stearate coated", "CaCO3 content: >95%"],
      applications: ["Plastics", "Rubber", "Paints & Coatings", "Adhesives", "Sealants"],
      description:
        "Stearate-coated calcium carbonate with enhanced hydrophobic properties for improved polymer processing and performance.",
      image: "/images/gcc-product.jpg",
    },
    {
      name: "Talc Powder",
      specs: ["Particle size: 0.5-10 microns", "Whiteness: 90-95%", "SG: 2.7-2.8"],
      applications: ["Cosmetics & Personal Care", "Ceramics", "Paints", "Rubber", "Textiles"],
      description:
        "High-purity talc powder with excellent chemical inertness and smoothness for diverse industrial applications.",
      image: "/images/talc-product.jpg",
    },
    {
      name: "Limestone",
      specs: ["CaCO3 content: >95%", "Grading: Various customizable", "Bulk Density: 1.4-1.6 g/cm³"],
      applications: [
        "Construction",
        "Agriculture",
        "Steel Production",
        "Chemical Industry",
        "Environmental Applications",
      ],
      description:
        "Industrial-grade limestone suitable for heavy-duty applications requiring reliable calcium carbonate sources.",
      image: "/images/limestone-product.jpg",
    },
    {
      name: "Limestone Lumps (High Purity)",
      specs: ["CaCO3 content: >97%", "Size: Customizable lumps", "Whiteness: 90-95%"],
      applications: ["Steel Production", "Glass Manufacturing", "Chemical Industry", "Agriculture", "Construction"],
      description:
        "High-purity limestone lumps ideal for industrial processes requiring larger aggregate sizes and superior calcium carbonate content.",
      image: "/images/limestone-product.jpg",
    },
    {
      name: "Limestone Powder (Feed Grade)",
      specs: ["Particle size: Fine powder", "CaCO3 content: >95%", "Feed grade certified"],
      applications: ["Animal Feed", "Poultry", "Agriculture", "Livestock", "Aquaculture"],
      description:
        "Premium feed-grade limestone powder formulated for optimal nutrition and health in animal feed applications.",
      image: "/images/limestone-product.jpg",
    },
    {
      name: "Gypsum (POP – Industrial and Agricultural Grade)",
      specs: ["CaSO4·2H2O content: >95%", "Grades: Industrial & Agricultural", "Particle size: Customizable"],
      applications: ["Construction & Drywall", "Agriculture", "Soil Amendment", "Cement", "Industrial Processing"],
      description:
        "Versatile gypsum products available in both industrial and agricultural grades for diverse applications across multiple industries.",
      image: "/images/gcc-product.jpg",
    },
    {
      name: "Hydrated Lime (Calcium Hydroxide)",
      specs: ["Ca(OH)2 content: >95%", "Particle size: Fine powder", "Bulk Density: 0.5-0.6 g/cm³"],
      applications: [
        "Water Treatment",
        "Construction",
        "Acid Neutralization",
        "Chemical Industry",
        "Environmental Applications",
      ],
      description:
        "High-quality hydrated lime for applications requiring calcium hydroxide, including water treatment and industrial processing.",
      image: "/images/gcc-product.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Precision-engineered minerals meeting the highest quality standards for industrial applications worldwide.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {products.map((product, i) => (
              <div
                key={i}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-96 md:h-auto bg-muted">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">{product.name}</h2>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{product.description}</p>

                    <div className="mb-6">
                      <h3 className="font-semibold text-foreground mb-3">Specifications</h3>
                      <ul className="space-y-2">
                        {product.specs.map((spec, j) => (
                          <li key={j} className="flex items-center gap-2 text-foreground/80">
                            <CheckCircle size={16} className="text-primary flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-3">Applications</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, j) => (
                          <span
                            key={j}
                            className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">Need Custom Solutions?</h2>
          <p className="text-foreground/70 mb-6">
            Our technical team can provide custom grading, packaging, and formulations tailored to your specific
            requirements.
          </p>
           
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors">
          <Link
              href="/contact">
            Contact Our Technical Team
           </Link>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
