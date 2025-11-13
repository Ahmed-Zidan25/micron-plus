"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex justify-between items-center h-16">
  {/* Logo */}
<Link href="/" className="flex items-center">
    <img
      src="/images/logo.png"
      alt="Micron Plus Logo"
      className="h-8 sm:h-12 w-auto" // <-- Changed the classes
    />
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/products" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Products
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">
              Contact
            </Link>
            <Link
              href="/get-quote"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-secondary transition-colors text-sm"
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors text-sm font-medium block py-2"
            >
              Contact
            </Link>
            <Link
              href="/get-quote"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-secondary transition-colors text-sm inline-block"
            >
              Get Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
