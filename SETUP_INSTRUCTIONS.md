# Setup Instructions for JetGlide Updates

## 1. Owner's Image Setup ⚠️ IMPORTANT

The uploaded owner's image needs to be saved to the assets directory:

1. **Save the uploaded image** as `ogunsakin_timileyin.jpg` (lowercase `.jpg` extension)
2. **Place it in**: `attached_assets/stock_images/ogunsakin_timileyin.jpg`
3. The About page is already configured to use this image

**Note**: The image file must be named exactly `ogunsakin_timileyin.jpg` with lowercase extension, otherwise the site will show an error.

## 2. EmailJS Configuration

To enable email functionality for the contact form:

### Step 1: Install EmailJS Package
```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (AirCambridge Jet Team)

### Step 3: Configure Environment Variables
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_WHATSAPP_NUMBER=+2348012345678
   ```

3. Get these values from your EmailJS dashboard:
   - Service ID: From the "Email Services" section
   - Template ID: From the "Email Templates" section
   - Public Key: From "Account" > "General" > "Public Key"

### Step 4: Enable EmailJS in Contact Page
1. Open `client/src/pages/Contact.tsx`
2. Uncomment the EmailJS code in the `handleSubmit` function (lines 47-62)
3. Remove or comment out the temporary success message (line 65)

## 3. WhatsApp Configuration

Update the WhatsApp number in `.env`:
```env
VITE_WHATSAPP_NUMBER=+2348012345678
```

Replace with the actual business WhatsApp number.

## 4. Updated Features

### About Page
- ✅ Owner's name: Ogunsakin Timileyin
- ✅ Updated bio highlighting luxury aviation expertise
- ✅ Professional image integration

### Contact Page
- ✅ WhatsApp integration (click to chat)
- ✅ Email contact with EmailJS
- ✅ Updated locations: Abuja, Lagos, London, USA, Ghana, Kenya

### Booking Page
- ✅ Location dropdowns with available cities
- ✅ Dual currency pricing (USD & NGN)
- ✅ Jet type selection with pricing
- ✅ Pricing guide card showing all jet types

### Available Locations
- Abuja, Nigeria
- Lagos, Nigeria
- London, UK
- USA
- Ghana
- Kenya

### Jet Pricing (Per Hour)
| Jet Type | Capacity | USD | NGN |
|----------|----------|-----|-----|
| Light Jet | 6-8 passengers | $3,500 | ₦5,600,000 |
| Midsize Jet | 8-10 passengers | $5,500 | ₦8,800,000 |
| Heavy Jet | 10-16 passengers | $8,500 | ₦13,600,000 |
| Ultra Long Range | 12-18 passengers | $12,000 | ₦19,200,000 |

## 5. Testing

After setup, test the following:

1. **About Page**: Verify owner's image and bio display correctly
2. **Contact Page**: 
   - Test WhatsApp button (opens WhatsApp with pre-filled message)
   - Test email form submission
3. **Booking Page**:
   - Test location dropdowns
   - Toggle between USD and NGN pricing
   - Select different jet types and verify pricing updates

## 6. Deployment Notes

Before deploying to production:
- Ensure all environment variables are set in your hosting platform
- Verify EmailJS credentials are correct
- Test all contact methods (email and WhatsApp)
- Confirm pricing is accurate and up-to-date
