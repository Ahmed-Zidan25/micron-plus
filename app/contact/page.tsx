"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SocialMedia from "@/components/social-media"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Reach out to our team for product inquiries, technical support, or business partnerships.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground/70">+2 01110716765</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground/70">commercial@micron-plus.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-foreground/70">
                    Third floor, Buliding 7127,
                    <br />
                     Miraj city, Maadi,
                    <br />
                    Cairo, Egypt
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                  <p className="text-foreground/70">
                    Sunday - Thursday: 9AM - 5PM GMT
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-8 rounded-lg border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="How can we help?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              >
                Send Message
              </button>
            </form>
            {/* Social Media Section */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Follow Us</CardTitle>
                <CardDescription>Stay connected through our social media channels</CardDescription>
              </CardHeader>
              <CardContent>
                <SocialMedia showLabels />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="mb-20">
          <Card className="border-border">
            <CardHeader>
             <CardTitle className="text-gray-800 flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-600" />
              <span>Find Us</span>
            </CardTitle>
  
              <CardDescription>Our head office location in Cairo, Egypt</CardDescription>
            </CardHeader>
            <CardContent>
            {/* The interactive map is embedded here using an iframe. */}
            <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
             <iframe 
    width="100%" 
    height="450" 
    frameborder="0" 
    style="border:0" 
    src="https://maps.google.com/?q=Cairo,%Maadi,%Miraj%city%Buliding%7127&output=embed"
    allowfullscreen 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
             
             {/*  <iframe
                // The source uses the specified address for accurate pinning
                src="https://maps.google.com/maps?q=100%20Al%20Merghani,%20Al%20Golf,%20Nasr%20City,%20Cairo%20Governorate%204451426,%20Egypt&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Delta Foodstuffs Office Location"
              ></iframe> */}
            </div>
            
            {/* Displaying the physical address for clarity */}
            <p className="text-sm text-gray-600 mt-4 flex items-center justify-center sm:justify-start">
                <MapPin className="h-4 w-4 text-teal-600 mr-2" />
                Buliding 7127, Miraj city, Maadi, Cairo, Egypt
            </p>
          </CardContent>
          </Card>
        </div> 

      </section>

      <Footer />
    </div>
  )
}
