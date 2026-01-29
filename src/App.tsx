import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import AILandscape from './components/AILandscape';
import InternalPortal from './components/InternalPortal';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Box component="main">
        <Hero />
        <AILandscape />
        <InternalPortal />
        <FeedbackForm />
      </Box>
      <Box component="footer" sx={{ py: 4, textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: 'text.secondary', fontSize: '0.875rem' }}>
        &copy; {new Date().getFullYear()} ABC AI Community. All rights reserved.
      </Box>
    </Box>
  );
}

export default App;
