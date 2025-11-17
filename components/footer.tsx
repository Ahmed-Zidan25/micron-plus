import Link from "next/link"
import { Mail, MapPin, Phone, Facebook, Linkedin, Youtube } from "lucide-react"
import SocialMedia from "./social-media";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
  {/* Logo Placement */}
  <div className="mb-4">
    <Link href="/" className="flex items-center">
   <img
      src="/images/logo-light.png" // <--- Change to the white logo file
      alt="Micron Plus Logo"
      className="h-8 sm:h-18 w-auto"
    />
 {/*    <img
      src="/images/logo.png"
      alt="Micron Plus Logo"
      className="h-8 sm:h-18 w-auto" // <-- Changed the classes
    /> */}
</Link>
  </div>
  {/* End Logo Placement */}
  
  <p className="text-sm opacity-90 leading-relaxed">
    Global supplier of premium industrial minerals and chemical solutions since established.
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="hover:opacity-80 transition-opacity">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-80 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/get-quote" className="hover:opacity-80 transition-opacity">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Ground Calcium Carbonate
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Talc
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  Limestone
                </a>
              </li>
            </ul>
          </div>
{/* Contact & Social */}
          <div className="space-y-4">
             <h4 className="font-semibold mb-4">Connect With Us</h4>
            
            <SocialMedia variant="minimal" />
            <p className="text-sm opacity-90 leading-relaxed">
             Buliding 7127, Miraj city, Maadi, Cairo, Egypt 
              <br />
              +20 1110716765
              <br />
              commercial@micron-plus.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm opacity-90 leading-relaxed">
            ©2023 micron-plus | All rights reserved | Empowering Industries with Premium Minerals & Chemicals
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
