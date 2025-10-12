# Quick Start Guide - JetGlide Website

## 🎯 What's Been Updated

Your JetGlide website has been updated with:

✅ **Your Information**: Ogunsakin Timileyin as owner with professional bio  
✅ **Location Dropdowns**: From/To fields now use dropdown menus  
✅ **Dual Currency**: Prices shown in both USD ($) and Naira (₦)  
✅ **WhatsApp Contact**: Direct WhatsApp buttons throughout the site  
✅ **Email Contact**: Email form ready (needs EmailJS setup)  
✅ **Simplified Design**: Focus on direct contact with you  

## 🚨 IMPORTANT: First Step

**Save the owner's image file:**
1. Take the uploaded image of Ogunsakin Timileyin
2. Rename it to: `ogunsakin_timileyin.jpg` (lowercase)
3. Save it to: `attached_assets/stock_images/ogunsakin_timileyin.jpg`

Without this step, the About page will show an error.

## 📍 Available Locations

The site now has these locations in dropdown menus:
- Abuja, Nigeria
- Lagos, Nigeria
- London, UK
- USA
- Ghana
- Kenya

## 💰 Pricing

Prices are shown in both currencies:
- **Light Jet**: $3,500 / ₦5,600,000 per hour
- **Midsize Jet**: $5,500 / ₦8,800,000 per hour
- **Heavy Jet**: $8,500 / ₦13,600,000 per hour
- **Ultra Long Range**: $12,000 / ₦19,200,000 per hour

Users can toggle between USD and NGN on Fleet and Booking pages.

## 📱 Contact Methods

### WhatsApp (Ready to Use)
- Update your WhatsApp number in `.env` file
- Default: +2348012345678
- Buttons appear on Home, Booking, and Contact pages

### Email (Needs Setup)
To enable email contact:
1. Run: `npm install @emailjs/browser`
2. Create free account at [emailjs.com](https://www.emailjs.com)
3. Add credentials to `.env` file
4. See `INSTALL_EMAILJS.md` for details

## 🧪 Testing

After saving the owner's image, test:
1. Visit `/about` - Check if image shows
2. Visit `/` (home) - Try "Contact via WhatsApp" button
3. Visit `/fleet` - Toggle between USD and NGN
4. Visit `/booking` - Check location dropdowns
5. Visit `/contact` - Test WhatsApp button

## 📞 How Customers Contact You

### Option 1: WhatsApp (Instant)
- Customer clicks "Contact via WhatsApp"
- WhatsApp opens with pre-filled message
- You receive direct message on WhatsApp

### Option 2: Email (After Setup)
- Customer fills contact form
- Email sent to your inbox via EmailJS
- You respond via email

### Option 3: Booking Form
- Customer fills booking details
- Can submit via form OR WhatsApp
- WhatsApp option includes all booking details

## 🔧 Configuration Files

### `.env` (Create this file)
```env
# WhatsApp Number (Update this!)
VITE_WHATSAPP_NUMBER=+2348012345678

# EmailJS (Add after setup)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📚 Need More Help?

- **Full Setup Guide**: See `SETUP_INSTRUCTIONS.md`
- **EmailJS Setup**: See `INSTALL_EMAILJS.md`
- **Update Summary**: See `UPDATE_SUMMARY.md`

## 🎨 What Changed on Each Page

### Home Page
- Quick booking widget with location dropdowns
- "Contact via WhatsApp" and "Send Email" buttons
- Removed testimonials (simplified)

### About Page
- Your name: Ogunsakin Timileyin
- Your professional bio
- Your photo (once you save the image file)

### Fleet Page
- Shows available locations at top
- USD/NGN currency toggle
- Prices update based on currency selection

### Booking Page
- Location dropdowns (From/To)
- Currency toggle for pricing
- "Book via WhatsApp" button
- Pricing guide showing all jet types

### Contact Page
- WhatsApp contact button
- Email contact form
- List of available locations

## ✨ Key Features

1. **Direct Contact**: Everything leads to WhatsApp or Email
2. **Simple Booking**: Easy dropdowns, clear pricing
3. **Professional**: Clean design, owner information
4. **Flexible**: Dual currency, multiple locations
5. **Mobile-Friendly**: Works great on phones

---

**Ready to launch?** Just save the owner's image and update the WhatsApp number in `.env`!
