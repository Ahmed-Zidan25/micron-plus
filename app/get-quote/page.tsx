"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    unit: "metric-tons",
    requiredDate: "",
    specifications: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setSuccessMessage("")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to send quote request")
      }

      setSuccessMessage("Quote request sent successfully! Check your email for confirmation.")
      setFormData({
        company: "",
        contactName: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        unit: "metric-tons",
        requiredDate: "",
        specifications: "",
        message: "",
      })

      setTimeout(() => setSuccessMessage(""), 5000)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "An error occurred. Please try again.")
      setTimeout(() => setErrorMessage(""), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Request a Quote</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Get competitive pricing and detailed specifications for our industrial mineral products.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">{errorMessage}</div>
          )}

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold text-primary mb-8">Quote Request Form</h2>

            {/* Company & Contact Info */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">Company & Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-8 pb-8 border-b border-border">
              <h3 className="font-semibold text-foreground mb-4">Product Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Product *</label>
                  <select
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a product</option>
                    <option value="gcc">Ground Calcium Carbonate (GCC)</option>
                    <option value="talc">Talc Powder</option>
                    <option value="limestone">Limestone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Quantity *</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter quantity"
                    />
                    <select
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="metric-tons">MT</option>
                      <option value="kilograms">KG</option>
                      <option value="pounds">LBS</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-foreground mb-2">Required Delivery Date</label>
                <input
                  type="date"
                  value={formData.requiredDate}
                  onChange={(e) => setFormData({ ...formData, requiredDate: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Specifications & Message */}
            <div className="mb-6">
              <h3 className="font-semibold text-foreground mb-4">Additional Requirements</h3>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Specifications / Special Requirements
                </label>
                <textarea
                  value={formData.specifications}
                  onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Particle size, purity requirements, packaging preferences, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Any additional information or questions?"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit Quote Request"}
            </button>

            <p className="text-sm text-foreground/60 mt-4 text-center">
              Our team will contact you within 24 hours with a detailed quote.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
