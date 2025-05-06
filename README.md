# Some Company - Modern Web Solutions

This is a two-page website created as a frontend development test task, featuring a main page and a contact page with form functionality.

## Features

- Responsive design optimized for all device sizes
- Modern UI using Material UI components
- Optimized YouTube video embedding using react-lite-youtube-embed for better performance
- Form validation and submission handling
- SEO-friendly with proper meta tags (Open Graph, Twitter Cards)
- Accessibility best practices

## Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material UI
- **Styling**: Styled Components
- **Routing**: React Router DOM
- **Meta Tags**: React Helmet Async

## Setup and Installation

1. Clone this repository
2. Install dependencies:
```
npm install
```
3. Run the development server:
```
npm run dev
```
4. Build for production:
```
npm run build
```
5. Preview the production build:
```
npm run preview
```

## Project Structure

- `/src` - Source code directory
  - `/api` - API services for form handling
  - `/components` - Reusable components
  - `/layouts` - Layout components
  - `/pages` - Page components
  - `/styles` - Global styles

## Performance Optimizations

- Used `react-lite-youtube-embed` to improve Largest Contentful Paint (LCP) metrics by loading YouTube videos only when they are in viewport
- Implemented responsive design patterns for optimal display on all devices
- Used proper semantic HTML elements for better accessibility and SEO

## Custom CSS Techniques

The project implements a custom responsive grid system using CSS Grid and styled-components, providing a modern and flexible layout solution without relying on a traditional grid framework. This technique:

- Uses `display: grid` with responsive column layouts
- Implements a mobile-first approach with media queries
- Creates flexible card layouts that adapt to content
- Uses CSS transitions for smooth hover effects on cards

## Deployment

The site can be easily deployed to various platforms:
- **Vercel**: Connect your GitHub repository

## SEO and Accessibility

- Implemented proper heading hierarchy (h1, h2, etc.)
- Added appropriate meta tags for better search engine visibility
- Used semantic HTML elements throughout
- Ensured keyboard navigation works properly
- Added proper ARIA attributes where needed 