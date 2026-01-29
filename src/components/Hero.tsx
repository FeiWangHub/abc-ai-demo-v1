import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const HeroSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'radial-gradient(circle at center, #1A1A1A 0%, #0A0A0A 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.05) 0%, rgba(157, 78, 221, 0.05) 100%)',
    zIndex: 1,
  },
}));

const ShimmerText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(90deg, #00D4FF, #9D4EDD, #00D4FF)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: `${shimmer} 4s linear infinite`,
  fontWeight: 800,
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const Hero: React.FC = () => {
  return (
    <HeroSection id="hero">
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
        <ShimmerText variant="h1">
          ABC AI COMMUNITY
        </ShimmerText>
        <Typography variant="h2" sx={{ textAlign: 'center', color: 'text.secondary', mb: 4, fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Bridging Global Trends with Internal Innovation
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" size="large" onClick={() => document.getElementById('landscape')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Landscape
          </Button>
          <Button variant="outlined" size="large" onClick={() => document.getElementById('console')?.scrollIntoView({ behavior: 'smooth' })}>
            Internal Portal
          </Button>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero;
