import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, MenuItem, Alert, Snackbar, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: '#1A1A1A',
  borderRadius: 16,
  border: '1px solid rgba(0, 212, 255, 0.2)',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
}));

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

const categories = ['AI Landscape', 'Platform Console', 'App Store', 'Other'];

const FeedbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Other',
    requirement: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/feedback', formData);
      if (response.data.success) {
        setSnackbar({ open: true, message: 'Requirement submitted successfully!', severity: 'success' });
        setFormData({ name: '', email: '', category: 'Other', requirement: '' });
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      const errorMsg = error.response?.data?.detail || 'Failed to submit requirement. Please try again.';
      setSnackbar({ open: true, message: errorMsg, severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box id="feedback" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="sm">
        <SectionTitle variant="h2">LEAVE A REQUIREMENT</SectionTitle>
        <StyledPaper>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <TextField
              label="Name (Optional)"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email (Optional)"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              select
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              fullWidth
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Requirement / Comment"
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              multiline
              rows={4}
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ mt: 2, height: 56 }}
            >
              {loading ? 'Submitting...' : 'Submit Requirement'}
            </Button>
          </Box>
        </StyledPaper>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FeedbackForm;
