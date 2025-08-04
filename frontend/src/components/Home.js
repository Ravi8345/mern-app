import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f5f7fa',
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        {/* HERO SECTION */}
        <Paper elevation={3} sx={{ p: 5, borderRadius: 4, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
            Welcome to InternHub 👋
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Your gateway to internship & volunteer opportunities.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button variant="contained" size="large" onClick={() => navigate('/register')}>
              Register Now
            </Button>
            <Button variant="outlined" size="large" onClick={() => navigate('/leaderboard')}>
              View Leaderboard
            </Button>
          </Stack>
        </Paper>

        {/* FEATURES SECTION */}
        <Box mt={8}>
          <Typography variant="h4" textAlign="center" gutterBottom sx={{ fontWeight: 600 }}>
            Why InternHub?
          </Typography>

          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  🔒 Easy Registration
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quick and secure process to apply as an intern or volunteer.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  📊 Real-time Leaderboard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Track top applicants based on activity and achievements.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 3, borderRadius: 3, textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>
                  ✅ Verified Applicants
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  All entries are reviewed for authenticity and transparency.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* FOOTER */}
        <Box mt={10} textAlign="center" color="text.secondary">
          <Typography variant="body2">
            © {new Date().getFullYear()} InternHub — Built with ❤️ using React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;
