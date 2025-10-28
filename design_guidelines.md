# Design Guidelines: Offline Travel Routes PWA

## Design Approach

**Reference-Based Approach**: Drawing inspiration from **Airbnb** and **Google Travel** for their exceptional travel-focused interfaces that balance visual richness with functional clarity. These platforms excel at presenting destination content in engaging, digestible formats perfect for mobile consumption.

**Key Design Principles**:
- Mobile-first progressive enhancement
- Visual storytelling through imagery
- Immediate value without cognitive load
- Touch-friendly interactions optimized for mobile devices
- Offline-ready visual feedback

---

## Typography System

**Primary Font**: Inter (Google Fonts)
- Headings: 700 weight, 1.2 line-height
- Subheadings: 600 weight, 1.3 line-height  
- Body: 400 weight, 1.5 line-height
- Captions: 400 weight, 1.4 line-height

**Scale**:
- Hero/Page Titles: text-3xl md:text-4xl
- Card Titles: text-xl md:text-2xl
- Section Headers: text-2xl md:text-3xl
- Body Text: text-base
- Metadata/Tags: text-sm
- Microcopy: text-xs

---

## Layout System

**Spacing Primitives**: Tailwind units of **2, 4, 8, 12, 16**
- Component internal spacing: p-4, gap-2
- Card padding: p-4 md:p-6
- Section spacing: py-12 md:py-16
- Element gaps: gap-4 md:gap-8

**Container Strategy**:
- Mobile: px-4 (full width with side padding)
- Tablet/Desktop: max-w-7xl mx-auto px-6
- Card grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## Component Library

### Navigation
**Mobile-First Bottom Navigation Bar** (sticky)
- 4-5 primary actions with icons + labels
- Home, Search, Favorites, Downloaded Routes, Profile
- Icons: Heroicons (solid variants)
- Active state with icon fill change

**Top Header** (sticky)
- App logo/name (left)
- Offline status indicator (right)
- Download progress indicator when syncing

### Route Cards (Primary Component)
**Large Format Cards** with:
- Full-width hero image (aspect-ratio-16/9 on mobile, 4/3 on desktop)
- Overlay gradient for text legibility
- Route title (text-xl font-bold) overlaid on image
- Quick stats row: Duration, Activities Count, Category tag
- Heart icon for favorites (top-right corner)
- Saved/Downloaded indicator badge

**Interaction**: Entire card is tappable, subtle scale transform on mobile tap

### Category Navigation
**Horizontal Scrolling Pill Bar**:
- Chips with icons: Beaches, Mountains, Historic Cities, Adventure, Food Tours, Nature
- Active state with filled background
- Smooth horizontal scroll with snap points
- Positioned below search, above content grid

### Search Component
**Prominent Search Bar**:
- Sticky at top of discovery screens
- Search icon (left), clear button (right)
- Placeholder: "Search destinations, activities..."
- Rounded-full design for modern feel

### Route Detail View
**Full-Screen Modal/Page**:
- Hero image carousel (2-4 images, swipeable)
- Route title with save/share actions
- Info cards: Duration, Best Season, Difficulty Level, Highlights Count
- Expandable sections: Overview, Day-by-Day Itinerary, Practical Tips, Map Preview
- Large "Download for Offline" CTA button (if not downloaded)
- Activity list with checkboxes for tracking progress

### Filter Drawer
**Bottom Sheet Modal** (mobile):
- Duration filter (slider: 1-14 days)
- Category multi-select
- Difficulty level
- Clear All / Apply buttons

### Empty States
- No internet + no cached routes: Illustration with friendly message
- No search results: Suggest alternative searches
- Downloaded routes (when empty): Call-to-action to browse and download

### Offline Indicators
- Subtle banner when offline: "Offline Mode - Showing saved routes"
- Download progress cards with percentage
- Success confirmation when route fully cached

---

## Image Strategy

**Hero Images**: Essential throughout
- Home screen: Featured destination hero (aspect-ratio-21/9, with gradient overlay)
- Route cards: Destination-specific imagery showcasing key landmarks
- Detail views: Photo carousel with 3-5 high-quality images per route

**Image Treatment**:
- Subtle border-radius (rounded-lg for cards, rounded-xl for heroes)
- Gradient overlays on text-heavy sections (from transparent to black-60%)
- Loading states: Skeleton screens with subtle pulse animation

**Placeholder Strategy**: Use nature/landmark photography from Unsplash API or similar services for authentic travel aesthetic

---

## Interaction Patterns

**Mobile Gestures**:
- Swipe right to go back (route detail → list view)
- Pull to refresh route library
- Swipe carousel for multiple images
- Long-press card for quick actions menu

**Feedback**:
- Haptic feedback on key actions (favorites, downloads)
- Progress indicators for downloads
- Success checkmarks for completed downloads
- Toast notifications for sync status

**Loading States**:
- Skeleton screens for card grids
- Shimmer effect while loading images
- Spinner for search results

---

## Layout Variations

**Home Screen**: 
- Hero section with featured route (1/3 viewport height)
- Quick category chips
- "Popular Routes" grid (2-column on mobile, 3-column on desktop)
- "Recently Viewed" horizontal scroll section
- "Downloaded Routes" section for offline access

**Search/Discovery Screen**:
- Search bar (sticky)
- Category filter pills (horizontal scroll)
- Results grid (1-column mobile, 2-3 desktop)
- Infinite scroll loading

**Route Detail**:
- Image carousel (full-width)
- Content sections with generous whitespace
- Sticky CTA bar at bottom (mobile)

**Profile/Downloads**:
- User stats cards (Routes Completed, Countries Visited)
- Downloaded routes list with storage info
- Settings and preferences

---

## Accessibility

- Touch targets minimum 44x44px
- Color contrast ratios 4.5:1 for all text
- Focus indicators for keyboard navigation (web)
- Screen reader optimized labels
- Offline status announced to assistive tech

This design creates a visually rich, mobile-optimized travel discovery experience that works seamlessly offline while maintaining the engaging, aspirational quality users expect from modern travel applications.