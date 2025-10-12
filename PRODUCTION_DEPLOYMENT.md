# 🚀 Production Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Environment Variables ✅

**Local (.env file)**:
```env
VITE_EMAILJS_SERVICE_ID=service_x29lji3
VITE_EMAILJS_TEMPLATE_ID=template_kgt44s5
VITE_EMAILJS_PUBLIC_KEY=CoddUcOgIV1ASGycY
VITE_WHATSAPP_NUMBER=+2349160965661
```

**Production (Set these in your hosting platform)**:
- [ ] `VITE_EMAILJS_SERVICE_ID` = `service_x29lji3`
- [ ] `VITE_EMAILJS_TEMPLATE_ID` = `template_kgt44s5`
- [ ] `VITE_EMAILJS_PUBLIC_KEY` = `CoddUcOgIV1ASGycY`
- [ ] `VITE_WHATSAPP_NUMBER` = `+2349160965661`

⚠️ **CRITICAL**: All variables must start with `VITE_` to be accessible in the browser.

### 2. Dependencies ✅

**Verify all packages are installed**:
```bash
npm install
```

**Key dependencies**:
- [ ] `@emailjs/browser` - For email functionality
- [ ] `react`, `react-dom` - Core React
- [ ] `wouter` - Routing
- [ ] `gsap` - Animations
- [ ] All UI components installed

### 3. Build Test 🧪

**Test the production build locally**:
```bash
npm run build
```

**Expected output**:
- ✅ Build completes without errors
- ✅ Creates `dist` folder
- ✅ No TypeScript errors
- ✅ No missing dependencies

**Preview the build**:
```bash
npm run preview
```

Then test:
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Contact form works
- [ ] WhatsApp buttons work
- [ ] Navigation works
- [ ] Responsive design works

### 4. EmailJS Configuration ✅

**Verify EmailJS is set up**:
- [ ] EmailJS account created at https://www.emailjs.com
- [ ] Service ID: `service_x29lji3` exists
- [ ] Template ID: `template_kgt44s5` exists
- [ ] Public Key: `CoddUcOgIV1ASGycY` is valid
- [ ] Template has these variables:
  - `{{from_name}}`
  - `{{from_email}}`
  - `{{message}}`
  - `{{to_name}}`

**Test email sending**:
- [ ] Go to Contact page
- [ ] Fill form and submit
- [ ] Check email inbox
- [ ] Verify email received

### 5. WhatsApp Integration ✅

**Verify WhatsApp number**:
- [ ] Number: `+2349160965661`
- [ ] Format: Include country code with `+`
- [ ] Test all WhatsApp buttons:
  - [ ] Home page "Contact via WhatsApp"
  - [ ] Booking page "Book via WhatsApp"
  - [ ] Contact page phone number
  - [ ] International pricing "Get Quote"

### 6. Pages & Features ✅

**Test all pages**:
- [ ] **Home** (`/`)
  - [ ] Hero slider works
  - [ ] Quick booking widget
  - [ ] Features section
  - [ ] Contact CTA buttons
  - [ ] No Featured Fleet section (removed)
  
- [ ] **About** (`/about`)
  - [ ] Owner image displays (ogunsakin_timilehin.jpg.JPG)
  - [ ] Owner name: Ogunsakin Timilehin
  - [ ] Bio and mission display
  
- [ ] **Booking** (`/booking`)
  - [ ] Location dropdowns work
  - [ ] Same location disabled (validation)
  - [ ] Currency toggle works
  - [ ] Pricing displays correctly
  - [ ] WhatsApp button works
  - [ ] Form submission works
  
- [ ] **Contact** (`/contact`)
  - [ ] Email form works
  - [ ] WhatsApp number displays
  - [ ] Icons and UI look good
  - [ ] Form validation works

### 7. Navigation & Footer ✅

**Navigation**:
- [ ] Home link works
- [ ] About link works
- [ ] Booking link works
- [ ] Contact link works
- [ ] Fleet link removed ✅
- [ ] Mobile menu works

**Footer**:
- [ ] Phone number: `+2349160965661`
- [ ] Email: `info@aircambridgejet.com`
- [ ] Locations: Abuja | Lagos | Ghana | Kenya
- [ ] Fleet link removed ✅
- [ ] Social icons present
- [ ] Newsletter signup present

### 8. Validation & Error Handling ✅

**Location Validation**:
- [ ] Quick Booking: Can't select same location
- [ ] Booking Page: Can't select same location
- [ ] Disabled options are grayed out

**Form Validation**:
- [ ] Contact form requires all fields
- [ ] Booking form requires all fields
- [ ] Email validation works
- [ ] Error messages display

**Error Handling**:
- [ ] EmailJS errors show toast notification
- [ ] Network errors handled gracefully
- [ ] 404 page exists (if applicable)

### 9. Pricing Display ✅

**Within Nigeria**:
- [ ] Shows $8,000 USD / ₦12,800,000 NGN
- [ ] Currency toggle works
- [ ] Both prices display

**International**:
- [ ] Shows "Custom Pricing"
- [ ] "Get Quote" button works
- [ ] Opens WhatsApp with inquiry

### 10. Performance & Optimization 🚀

**Images**:
- [ ] All images load correctly
- [ ] Owner image: `ogunsakin_timilehin.jpg.JPG`
- [ ] Jet images in hero slider
- [ ] No broken images

**Loading**:
- [ ] Page loads quickly
- [ ] Animations smooth
- [ ] No console errors
- [ ] No console warnings

**Mobile Responsive**:
- [ ] Test on mobile viewport
- [ ] Navigation menu works
- [ ] Forms are usable
- [ ] Images scale properly
- [ ] Text is readable

## 🏗️ Deployment Steps

### Step 1: Final Build

```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Build for production
npm run build
```

### Step 2: Set Environment Variables

**On your hosting platform** (Vercel, Netlify, etc.):

1. Go to project settings
2. Find "Environment Variables" section
3. Add these variables:

```
VITE_EMAILJS_SERVICE_ID=service_x29lji3
VITE_EMAILJS_TEMPLATE_ID=template_kgt44s5
VITE_EMAILJS_PUBLIC_KEY=CoddUcOgIV1ASGycY
VITE_WHATSAPP_NUMBER=+2349160965661
```

4. Save and redeploy

### Step 3: Deploy

**For Vercel**:
```bash
vercel --prod
```

**For Netlify**:
```bash
netlify deploy --prod
```

**For other platforms**:
- Upload the `dist` folder
- Configure build command: `npm run build`
- Configure output directory: `dist`

### Step 4: Post-Deployment Testing

After deployment, test on production URL:

- [ ] Visit all pages
- [ ] Test contact form (send real email)
- [ ] Test WhatsApp buttons
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Check browser console for errors

## 🔍 Common Production Issues

### Issue 1: Environment Variables Not Loading

**Symptoms**: EmailJS errors, WhatsApp number not showing

**Solution**:
1. Verify variables are set in hosting platform
2. Ensure they start with `VITE_`
3. Redeploy after adding variables
4. Clear browser cache

### Issue 2: Images Not Loading

**Symptoms**: Broken images, 404 errors

**Solution**:
1. Check image paths are correct
2. Verify images are in `attached_assets` folder
3. Check `vite.config.ts` has correct `assetsInclude`
4. Rebuild and redeploy

### Issue 3: Routing Issues

**Symptoms**: 404 on page refresh, routes don't work

**Solution**:
1. Configure hosting for SPA (Single Page App)
2. Add `_redirects` file (Netlify) or `vercel.json` (Vercel)
3. All routes should redirect to `index.html`

### Issue 4: EmailJS CORS Errors

**Symptoms**: Email sending fails with CORS error

**Solution**:
1. Check EmailJS dashboard
2. Verify domain is whitelisted
3. Check public key is correct
4. Test with different browser

## 📋 Production Configuration Files

### For Netlify (_redirects)

Create `client/public/_redirects`:
```
/*    /index.html   200
```

### For Vercel (vercel.json)

Create `vercel.json` in root:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## ✅ Final Checklist Before Deploy

- [ ] All features tested locally
- [ ] Production build successful
- [ ] Environment variables ready
- [ ] EmailJS tested and working
- [ ] WhatsApp buttons tested
- [ ] All images loading
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Forms validated
- [ ] Pricing displays correctly
- [ ] Navigation works
- [ ] Footer updated
- [ ] Fleet page removed from navigation
- [ ] Featured Fleet removed from home

## 🎯 Post-Deployment Monitoring

**First 24 Hours**:
- [ ] Monitor EmailJS dashboard for emails
- [ ] Check for any error reports
- [ ] Test from different devices
- [ ] Verify analytics (if set up)

**First Week**:
- [ ] Monitor email delivery
- [ ] Check WhatsApp inquiries
- [ ] Review any user feedback
- [ ] Fix any reported issues

## 📞 Support & Maintenance

**EmailJS Limits**:
- Free tier: 200 emails/month
- Monitor usage in EmailJS dashboard
- Upgrade if needed

**WhatsApp**:
- Ensure phone number is active
- Respond to inquiries promptly
- Monitor message volume

## 🚀 You're Ready to Deploy!

Your JetGlide website is production-ready with:
- ✅ EmailJS integration
- ✅ WhatsApp contact
- ✅ Location validation
- ✅ Simplified design
- ✅ Responsive UI
- ✅ Clean codebase

**Deploy with confidence!** 🎉
