import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)
console.log('RESEND_API_KEY is defined:', !!process.env.RESEND_API_KEY);
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { company, contactName, email, phone, product, quantity, unit, requiredDate, specifications, message } = body

    const result = await resend.emails.send({
      from: "noreply@micronplus.com",
      to: email,
      replyTo: "commercial@micron-plus.com",
      subject: `Quote Request Confirmation - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Quote Request Confirmation</h2>
          
          <p>Dear ${contactName},</p>
          
          <p>Thank you for your interest in Micron Plus. We have received your quote request and our team will review your requirements shortly.</p>
          
          <h3 style="color: #3b82f6; margin-top: 30px; margin-bottom: 15px;">Your Quote Details:</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Company</td>
              <td style="padding: 10px;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Contact Name</td>
              <td style="padding: 10px;">${contactName}</td>
            </tr>
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Email</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Phone</td>
              <td style="padding: 10px;">${phone || "N/A"}</td>
            </tr>
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Product</td>
              <td style="padding: 10px;">${product}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Quantity</td>
              <td style="padding: 10px;">${quantity} ${unit}</td>
            </tr>
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Required Delivery Date</td>
              <td style="padding: 10px;">${requiredDate || "N/A"}</td>
            </tr>
          </table>
          
          ${specifications ? `<p><strong>Specifications:</strong><br>${specifications}</p>` : ""}
          ${message ? `<p><strong>Additional Message:</strong><br>${message}</p>` : ""}
          
          <p style="margin-top: 30px; color: #666;">Our team will contact you within 24 hours with a detailed quote and further information about your order.</p>
          
          <p style="margin-top: 20px; color: #666;">If you have any immediate questions, please feel free to contact us at:<br>
          <strong>Email:</strong> commercial@micron-plus.com<br>
          <strong>Phone:</strong> +1 (555) 123-4567</p>
          
          <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #999; font-size: 12px;">
            Best regards,<br>
            Micron Plus Team
          </p>
        </div>
      `,
    })

    if (result.error) {
      return NextResponse.json({ error: result.error.message }, { status: 400 })
    }

    await resend.emails.send({
      from: "noreply@micronplus.com",
      to: "commercial@micron-plus.com",
      subject: `New Quote Request from ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Quote Request</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Company</td>
              <td style="padding: 10px;">${company}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Contact Name</td>
              <td style="padding: 10px;">${contactName}</td>
            </tr>
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Email</td>
              <td style="padding: 10px;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Phone</td>
              <td style="padding: 10px;">${phone || "N/A"}</td>
            </tr>
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Product</td>
              <td style="padding: 10px;">${product}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Quantity</td>
              <td style="padding: 10px;">${quantity} ${unit}</td>
            </tr>
            <tr style="background-color: #f0f4f8; border-bottom: 1px solid #ddd;">
              <td style="padding: 10px; font-weight: bold; color: #1e40af;">Required Delivery Date</td>
              <td style="padding: 10px;">${requiredDate || "N/A"}</td>
            </tr>
          </table>
          
          ${specifications ? `<p><strong>Specifications:</strong><br>${specifications}</p>` : ""}
          ${message ? `<p><strong>Message:</strong><br>${message}</p>` : ""}
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "Quote request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Email sending error:", error)
    return NextResponse.json({ error: "Failed to send quote request. Please try again." }, { status: 500 })
  }
}
