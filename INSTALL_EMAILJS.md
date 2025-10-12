# EmailJS Installation Guide

## Quick Start

Run this command to install EmailJS:

```bash
npm install @emailjs/browser
```

## After Installation

1. **Configure EmailJS Account**:
   - Visit [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account
   - Set up an email service
   - Create an email template

2. **Update Environment Variables**:
   - Copy `.env.example` to `.env`
   - Add your EmailJS credentials:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

3. **Enable EmailJS in Contact Form**:
   - Open `client/src/pages/Contact.tsx`
   - Uncomment lines 48-62 (EmailJS integration code)
   - Remove line 65 (temporary console.log)

## Email Template Variables

Your EmailJS template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content
- `{{to_name}}` - Recipient (AirCambridge Jet Team)

## Testing

After setup, test the contact form to ensure emails are being sent successfully.
