import React from 'react';
import { Box, Typography, Grid, Card, CardContent, LinearProgress, Chip, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BarChart, ShoppingCart, TrendingUp, Code, Terminal } from 'lucide-react';

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
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: 12,
  background: 'rgba(0, 212, 255, 0.1)',
  color: '#00D4FF',
  marginBottom: theme.spacing(2),
}));

const AILandscape: React.FC = () => {
  const leaderboards = [
    { name: 'Chatbot Arena', score: 98 },
    { name: 'MMMU', score: 85 },
    { name: 'GPQA', score: 92 },
  ];

  const marketplaces = ['OpenRouter', 'Grok', 'Fireworks AI', 'Together AI', 'Anthropic'];
  const trendingTech = ['Agentic AI', 'MCP', 'Toolings', 'Multi-agent', 'Web Coding'];
  const devTools = ['Cursor', 'Trae', 'Zed', 'Claude Code', 'Windsurf'];
  const cliTools = ['Cloud Code', 'OpenCode', 'AIDER', 'Cline', 'Codex CLI'];

  return (
    <Box id="landscape" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionTitle variant="h2">AI LANDSCAPE</SectionTitle>
        
        <Grid container spacing={4}>
          {/* Leaderboard */}
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <IconWrapper><BarChart /></IconWrapper>
                <Typography variant="h5" gutterBottom>Benchmark Leaderboard</Typography>
                <Box sx={{ mt: 3 }}>
                  {leaderboards.map((item) => (
                    <Box key={item.name} sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">{item.name}</Typography>
                        <Typography variant="body2" sx={{ color: 'primary.main' }}>{item.score}%</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={item.score} sx={{ height: 6, borderRadius: 3 }} />
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Marketplaces */}
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <IconWrapper><ShoppingCart /></IconWrapper>
                <Typography variant="h5" gutterBottom>AI Marketplaces</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {marketplaces.map((item) => (
                    <Chip key={item} label={item} variant="outlined" sx={{ borderColor: 'primary.main', color: 'primary.main' }} />
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Trending Tech */}
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <IconWrapper><TrendingUp /></IconWrapper>
                <Typography variant="h5" gutterBottom>Trending Tech</Typography>
                <Box sx={{ mt: 2 }}>
                  {trendingTech.map((item) => (
                    <Typography key={item} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                      <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', mr: 1 }} />
                      {item}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Dev Tools */}
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <IconWrapper><Code /></IconWrapper>
                <Typography variant="h5" gutterBottom>Developer Tools</Typography>
                <Box sx={{ mt: 2 }}>
                  {devTools.map((item) => (
                    <Typography key={item} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                      <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'primary.main', mr: 1 }} />
                      {item}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* CLI Tools */}
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <IconWrapper><Terminal /></IconWrapper>
                <Typography variant="h5" gutterBottom>Agentic CLI</Typography>
                <Box sx={{ mt: 2 }}>
                  {cliTools.map((item) => (
                    <Typography key={item} variant="body2" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                      <Box component="span" sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', mr: 1 }} />
                      {item}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AILandscape;
