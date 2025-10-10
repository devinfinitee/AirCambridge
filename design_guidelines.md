# AirCambridge Jet - Luxury Private Jet Booking Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from luxury aviation and high-end travel platforms, combining elements from premium booking services with sophisticated, minimalist aesthetics. The design emphasizes exclusivity, trust, and effortless luxury.

## Core Design Elements

### Color Palette

**Light Mode (Primary):**
- Background White: `0 0% 100%` (Clean luxury backdrop)
- Primary Gold: `43 74% 66%` (#D4AF37 - Elegant accents, CTAs, borders)
- Deep Navy: `210 55% 12%` (#0A1A2F - Headers, text, professional elements)
- Secondary Gray: `0 0% 45%` (Supporting text)
- Success Green: `142 71% 45%` (Confirmations)

**Accent Usage:**
- Gold exclusively for: CTAs, icons, dividers, hover states, premium badges
- Navy for: Navigation, headings, footers, form labels
- White as dominant background throughout

### Typography

**Font Families:**
- Headings: `Playfair Display` (Elegant serif for luxury feel)
- Body/UI: `Poppins` (Clean, modern sans-serif)
- Accents: `Lato` (Optional for specific UI elements)

**Type Scale:**
- Hero Heading: `text-5xl md:text-6xl lg:text-7xl` (Playfair Display, font-bold)
- Section Headings: `text-3xl md:text-4xl lg:text-5xl` (Playfair Display)
- Subheadings: `text-xl md:text-2xl` (Poppins, font-semibold)
- Body: `text-base md:text-lg` (Poppins, font-normal)
- Small Text: `text-sm` (Poppins)

### Layout System

**Spacing Primitives:**
Use Tailwind units: `4, 6, 8, 12, 16, 20, 24, 32` for consistent rhythm
- Component padding: `p-6 md:p-8 lg:p-12`
- Section spacing: `py-16 md:py-24 lg:py-32`
- Grid gaps: `gap-6 md:gap-8`

**Container Strategy:**
- Max-width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`
- Full-width sections with inner containers
- Breakpoints: Mobile-first (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

### Component Library

**Navigation:**
- Sticky header with transparent-to-solid navy transition on scroll
- Logo (left), nav links (center), "Book Now" gold CTA (right)
- Mobile: Hamburger menu with slide-in drawer
- Animation: GSAP fade-in on scroll, smooth color transition

**Hero Section (Home Page):**
- Full-viewport GSAP-powered image slider showing luxury jets
- Smooth crossfade transitions (3-4 second intervals)
- Overlay gradient: `bg-gradient-to-b from-black/40 to-transparent`
- Centered headline + subheadline + dual CTAs
- No blue backgrounds - white/transparent overlays only

**Quick Booking Widget:**
- Floating or inline form: From/To dropdowns, Date picker, Passenger count
- Gold "Book Now" button with hover lift effect
- Clean white background with subtle shadow: `shadow-xl`
- Mobile: Stacks vertically, desktop: Grid layout

**Fleet Cards:**
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Card structure: Image → Jet name → Specs grid → "View Details" link
- Hover: Subtle scale `hover:scale-105` transition
- Gold accent border on hover

**Forms (Booking/Contact):**
- Clean white containers with navy labels
- Input fields: `border-gray-300 focus:border-gold focus:ring-gold`
- Submit button: Gold background, white text, hover darken
- Confirmation: Green success message with checkmark icon

**Testimonials:**
- Horizontal carousel with GSAP scroll-triggered animation
- White cards with subtle shadows, 5-star gold ratings
- Client photo (circular), quote, name/title

**Footer:**
- Deep navy background with white/gold text
- Multi-column layout: Company info, Quick Links, Newsletter, Social
- Newsletter: White input with gold submit button
- Social icons: Gold on hover

### GSAP Animations

**Home Page Slider:**
- Crossfade between jet images using `gsap.to()` with opacity
- Smooth transitions: `duration: 1.5, ease: "power2.inOut"`
- Auto-advance every 4 seconds with pause on interaction

**Scroll Animations:**
- Section fade-in: `opacity: 0 → 1, y: 50 → 0`
- Stagger children elements with `stagger: 0.15`
- Trigger: `scrollTrigger` at 80% viewport entry
- Parallax on hero: Background image moves slower than content

**Interactive Elements:**
- CTA hover: Subtle lift `y: -2px` with shadow increase
- Card hover: Scale `1.05` with smooth transition
- Menu transitions: Slide-in from right with fade

### Responsive Design

**Mobile (< 768px):**
- Single column layouts
- Stack booking widget fields
- Hamburger navigation
- Hero text: Smaller scale, tighter line-height
- Touch-friendly buttons (min-height: 44px)

**Tablet (768px - 1024px):**
- Two-column grids for fleet/testimonials
- Adjusted font sizes (middle range)
- Comfortable spacing

**Desktop (> 1024px):**
- Multi-column layouts maximize screen space
- Larger hero imagery
- Hover states fully enabled
- Wider max-width containers

### Images

**Hero Section Images:**
- 5-6 high-resolution luxury jet images for slider
- Exterior shots: Jets on tarmac at golden hour, sleek angles
- Interior shots: Premium cabin views, leather seating
- Lifestyle: Passengers boarding, scenic destinations
- Dimensions: 1920x1080 minimum, optimized WebP format

**Fleet Page:**
- Each jet: Exterior hero shot + 3-4 interior gallery images
- Consistent aspect ratio: 16:9 for main images
- Detail shots: Cockpit, seating, amenities

**About Page:**
- Owner placeholder: Professional portrait with subtle gold frame
- Team photos: Pilots/staff in uniform, lifestyle settings
- Office/hangar imagery for authenticity

**Additional:**
- Icon library: Heroicons for UI elements (outline style, gold color)
- Background patterns: Subtle diagonal lines or textures in navy sections
- Logo placement: White on navy, navy on white, gold accent variations

## Page-Specific Guidelines

**About Page:**
- Single owner/founder spotlight with large portrait placeholder
- Story section: Two-column (image left, text right on desktop)
- Core values: Icon grid with gold icons, navy headings
- Global reach: Interactive map or illustrated coverage graphic

**Fleet Page:**
- Filterable gallery with dropdown filters (Range/Capacity/Category)
- Modal or detail page: Full-screen jet showcase with spec sheet
- Price display: "From $X,XXX/hour" in gold accent

**Booking Page:**
- Multi-step form with progress indicator (gold active states)
- Confirmation modal: White card with green checkmark, reassuring copy
- Background: Subtle jet texture or solid white

**Contact Page:**
- Split layout: Form (left), Contact info + Map (right)
- Embedded Google Map with custom gold marker
- Social icons: LinkedIn, Instagram, X/Twitter in gold

This design system creates a cohesive, luxurious experience that communicates exclusivity and professionalism while maintaining excellent usability across all devices.