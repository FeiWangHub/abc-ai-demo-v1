import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 10, 10, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(0, 212, 255, 0.3)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(2),
  '&:hover': {
    color: theme.palette.primary.main,
    background: 'transparent',
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  letterSpacing: '0.1em',
  background: 'linear-gradient(45deg, #00D4FF 30%, #9D4EDD 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
}));

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo variant="h6" component="div" onClick={() => scrollToSection('hero')}>
            ABC AI COMMUNITY
          </Logo>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavButton onClick={() => scrollToSection('landscape')}>AI Landscape</NavButton>
            <NavButton onClick={() => scrollToSection('console')}>Internal Console</NavButton>
            <NavButton onClick={() => scrollToSection('appstore')}>App Store</NavButton>
            <NavButton onClick={() => scrollToSection('feedback')}>Feedback</NavButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
