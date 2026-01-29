import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Container, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Book, MessageSquare, Shield, Database, Cpu, AppWindow } from 'lucide-react';

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  fontWeight: 700,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 4,
    background: 'linear-gradient(90deg, #00D4FF, #9D4EDD)',
    borderRadius: 2,
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1A1A1A',
  '&:hover': {
    boxShadow: '0 0 20px rgba(157, 78, 221, 0.2)',
    borderColor: '#9D4EDD',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 12,
  background: 'rgba(157, 78, 221, 0.1)',
  color: '#9D4EDD',
  marginBottom: theme.spacing(2),
}));

const InternalPortal: React.FC = () => {
  const capabilities = [
    { name: 'Model Garden', desc: 'Centralized repository of curated AI models.', icon: <Cpu /> },
    { name: 'RAG Studio', desc: 'Enterprise-grade retrieval augmented generation.', icon: <Database /> },
    { name: 'Doc Intelligence', desc: 'Advanced document processing and analysis.', icon: <Shield /> },
  ];

  const apps = [
    { name: 'MCPAP.AI', desc: 'Multi-agent orchestration platform.', link: '#' },
    { name: 'AI Prompt Book', desc: 'Collaborative prompt engineering library.', link: '#' },
    { name: 'AI Platform', desc: 'End-to-end AI lifecycle management.', link: '#' },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: '#0A0A0A' }}>
      <Container maxWidth="lg">
        {/* Platform Console */}
        <Box id="console" sx={{ mb: 10 }}>
          <SectionTitle variant="h2">AI PLATFORM CONSOLE</SectionTitle>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <IconWrapper><Book /></IconWrapper>
                  <Typography variant="h5" gutterBottom>Internal Wiki</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Access detailed documentation, best practices, and architectural guidelines for our AI ecosystem.
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2 }}>
                  <Button size="small" variant="outlined" color="secondary" fullWidth>Go to Wiki</Button>
                </CardActions>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent>
                  <IconWrapper><MessageSquare /></IconWrapper>
                  <Typography variant="h5" gutterBottom>Teams Channel</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Join our active community of AI developers and researchers to share insights and get support.
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: 'auto', p: 2 }}>
                  <Button size="small" variant="outlined" color="secondary" fullWidth>Join Channel</Button>
                </CardActions>
              </StyledCard>
            </Grid>
            <Grid item xs={12} md={4}>
              <StyledCard>
                <CardContent sx={{ height: '100%' }}>
                  <Typography variant="h5" sx={{ mb: 2 }}>Internal Capabilities</Typography>
                  {capabilities.map((cap) => (
                    <Box key={cap.name} sx={{ mb: 2, display: 'flex', alignItems: 'flex-start' }}>
                      <Box sx={{ color: 'secondary.main', mr: 2, mt: 0.5 }}>{cap.icon}</Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{cap.name}</Typography>
                        <Typography variant="caption" color="text.secondary">{cap.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>

        {/* AI App Store */}
        <Box id="appstore">
          <SectionTitle variant="h2">AI APP STORE</SectionTitle>
          <Grid container spacing={4}>
            {apps.map((app) => (
              <Grid item xs={12} md={4} key={app.name}>
                <StyledCard>
                  <CardContent>
                    <IconWrapper><AppWindow /></IconWrapper>
                    <Typography variant="h5" gutterBottom>{app.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {app.desc}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ mt: 'auto', p: 2 }}>
                    <Button variant="contained" fullWidth href={app.link}>Launch App</Button>
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default InternalPortal;
