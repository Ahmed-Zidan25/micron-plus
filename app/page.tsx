"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, Zap, Globe, Award } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function Home() {
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add subtle parallax effect to background
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollY = window.scrollY
        videoRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


return (
    //@ts-ignore
    <div className="flex flex-col">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://or8t5wydhh9bdwn6.public.blob.vercel-storage.com/home_page_video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tags.
      </video>

          {/* <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="/industrial-minerals-background.jpg" type="video/mp4" />
          </video> */}
       
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 text-balance">
            Premium Industrial Minerals
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Global B2B supplier of high-quality Ground Calcium Carbonate, Talc, and Limestone solutions for industries
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-quote"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-all inline-flex items-center justify-center gap-2 group"
            >
              Get Quote Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Why Choose Micron Plus?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Superior Quality",
                description: "Precision-engineered minerals meeting the highest industry standards and certifications.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description:
                  "Reliable supply chain with operations across multiple continents for consistent delivery.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Industry Expertise",
                description: "Decades of experience serving pharmaceutical, cosmetic, paint, and industrial sectors.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "High Product Purity",
                description: "Natural Calcium Carbonate with 99.5% purity and 98% brightness, among the highest globally.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Extensive Export Network",
                description: "Over 8,000 MT monthly exports to leading Asian and African markets.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Customer-Centric Solutions",
                description: "Tailored product offerings and competitive pricing to guarantee satisfaction and loyalty.",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
     <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-primary">Our Product Range</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ground Calcium Carbonate",
                desc: "Ultra-fine GCC for pharmaceuticals, cosmetics, and industrial coatings.",
                image: "/images/GCC.jpg", 
              },
              { name: "Talc",
                desc: "High-purity talc powder for ceramics, cosmetics, and paint applications.",
                image: "/images/talc.jpg",
              },
              {
                name: "Limestone",
                desc: "Industrial-grade limestone for construction, agriculture, and chemical processes.",
                image: "/images/limestone.jpeg", 
              },
              
            ].map((product, i) => ( 
                <div key={i} className="group cursor-pointer">
             
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 h-64 rounded-lg mb-4 flex items-center justify-center border border-border group-hover:border-primary transition-colors overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" // Added classes for styling
                    />
                  </div>
                
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-foreground/70">{product.desc}</p>
                </div>
            ))} 
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              View All Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg opacity-90 mb-8">
            Get competitive pricing and technical support from our dedicated team.
          </p>
          <Link
            href="/get-quote"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
