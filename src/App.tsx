import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <>
        <Helmet>
          {/* Primary Meta Tags */}
          <title>Some Company - Modern Web Solutions</title>
          <meta name="description" content="We create modern web solutions for your business needs" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://example.com/" />
          <meta property="og:title" content="Some Company - Modern Web Solutions" />
          <meta property="og:description" content="We create modern web solutions for your business needs" />
          <meta property="og:image" content="https://example.com/og-image.jpg" />
          
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://example.com/" />
          <meta property="twitter:title" content="Some Company - Modern Web Solutions" />
          <meta property="twitter:description" content="We create modern web solutions for your business needs" />
          <meta property="twitter:image" content="https://example.com/twitter-image.jpg" />
        </Helmet>
        
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainLayout>
      </>
    </HelmetProvider>
  );
};

export default App; 