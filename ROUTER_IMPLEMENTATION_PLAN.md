# Router Implementation Plan

## Overview
This document outlines the plan to add React Router to the Trainizi landing page, creating separate pages for each navigation item in the header.

## Current Header Navigation
- Home
- For Enterprises  
- About
- Careers
- Blog
- Contact

## Implementation Plan

### Phase 1: Setup and Dependencies ⚙️

#### 1.1 Install React Router
- [ ] Install `react-router-dom` package
- [ ] Verify installation and compatibility

### Phase 2: Create Page Components 📄

#### 2.1 Create Individual Page Components
- [ ] `src/pages/Home.jsx` - Current homepage content
- [ ] `src/pages/ForEnterprises.jsx` - Enterprise solutions page
- [ ] `src/pages/About.jsx` - About company page
- [ ] `src/pages/Careers.jsx` - Job listings and company culture
- [ ] `src/pages/Blog.jsx` - Blog posts and articles
- [ ] `src/pages/Contact.jsx` - Contact form and information

#### 2.2 Page Structure Guidelines
Each page should include:
- Consistent layout with header and footer
- Page-specific content
- SEO-friendly structure
- Mobile-responsive design

### Phase 3: Router Configuration 🛣️

#### 3.1 Create Layout Component
- [ ] `src/components/Layout.jsx` - Wrapper with CallToBanner, Header, Footer
- [ ] Move shared elements from App.jsx to Layout
- [ ] Ensure consistent styling across all pages

#### 3.2 Set up Routes in App.jsx
```jsx
Routes to implement:
- "/" - Home page
- "/for-enterprises" - For Enterprises page  
- "/about" - About page
- "/careers" - Careers page
- "/blog" - Blog page
- "/contact" - Contact page
```

#### 3.3 Configure Router
- [ ] Wrap app with BrowserRouter
- [ ] Set up Routes and Route components
- [ ] Configure route paths and components
- [ ] Add 404 page handling

### Phase 4: Navigation Updates 🔗

#### 4.1 Update Header Component
- [ ] Replace `<a>` tags with `<Link>` components
- [ ] Update href attributes to use React Router paths
- [ ] Add active link styling
- [ ] Ensure mobile menu works with router

#### 4.2 Navigation Links Mapping
```jsx
Current: href="#" → New Router Path
Home: "#" → "/"
For Enterprises: "#" → "/for-enterprises"  
About: "#" → "/about"
Careers: "#" → "/careers"
Blog: "#" → "/blog"
Contact: "#" → "/contact"
```

### Phase 5: Page Content Development 📝

#### 5.1 Home Page
- [ ] Move existing homepage content (Hero, Features, MediaTestimonials, etc.)
- [ ] Ensure all existing functionality is preserved

#### 5.2 For Enterprises Page
- [ ] Enterprise-focused value propositions
- [ ] Case studies and ROI information
- [ ] Enterprise features and pricing
- [ ] Contact sales CTA

#### 5.3 About Page
- [ ] Company mission and vision
- [ ] Team information
- [ ] Company history and milestones
- [ ] Awards and recognition

#### 5.4 Careers Page
- [ ] Open positions listings
- [ ] Company culture and benefits
- [ ] Application process
- [ ] Employee testimonials

#### 5.5 Blog Page
- [ ] Blog post listings/grid
- [ ] Categories and tags
- [ ] Search functionality
- [ ] Pagination for posts

#### 5.6 Contact Page
- [ ] Contact form with validation
- [ ] Company contact information
- [ ] Office locations/map
- [ ] Social media links

### Phase 6: Testing and Optimization 🧪

#### 6.1 Navigation Testing
- [ ] Test all navigation links
- [ ] Verify back/forward browser buttons work
- [ ] Test mobile navigation
- [ ] Check URL updates correctly

#### 6.2 SEO and Performance
- [ ] Add proper page titles for each route
- [ ] Implement meta descriptions
- [ ] Test page load performance
- [ ] Ensure responsive design on all pages

## Technical Implementation Details

### Dependencies Required
```json
{
  "react-router-dom": "^6.x.x"
}
```

### Folder Structure After Implementation
```
src/
├── components/
│   ├── Layout.jsx          # New shared layout
│   ├── CallToBanner.jsx
│   ├── Header.jsx          # Updated with router links
│   ├── Footer.jsx
│   └── ...
├── pages/
│   ├── Home.jsx            # New - homepage content
│   ├── ForEnterprises.jsx  # New
│   ├── About.jsx           # New  
│   ├── Careers.jsx         # New
│   ├── Blog.jsx            # New
│   └── Contact.jsx         # New
├── App.jsx                 # Updated with router
└── main.jsx
```

### Router Configuration Example
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="for-enterprises" element={<ForEnterprises />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

## Success Criteria

- [ ] All header navigation links work and navigate to correct pages
- [ ] Browser back/forward buttons function properly
- [ ] URLs update correctly in address bar
- [ ] Mobile navigation works seamlessly
- [ ] Each page has unique, relevant content
- [ ] Consistent design and layout across all pages
- [ ] SEO-friendly URLs and page titles
- [ ] Fast page transitions and loading

## Timeline Estimate

- **Phase 1**: 30 minutes (Setup)
- **Phase 2**: 2-3 hours (Page components)
- **Phase 3**: 1 hour (Router configuration) 
- **Phase 4**: 30 minutes (Navigation updates)
- **Phase 5**: 3-4 hours (Content development)
- **Phase 6**: 1 hour (Testing)
- **Total**: 8-10 hours

## Notes

- Maintain existing homepage functionality and design
- Use consistent styling and components across all pages
- Consider lazy loading for better performance
- Implement proper error boundaries
- Ensure accessibility standards are maintained
- Plan for future scalability and additional routes