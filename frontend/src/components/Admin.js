import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Grid,
  Paper,
} from '@mui/material';

function Admin() {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/applicants');
        setApplicants(res.data);
      } catch (err) {
        setError('Failed to fetch applicants');
      } finally {
        setLoading(false);
      }
    };
    fetchApplicants();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: '700', color: 'primary.main', textAlign: 'center' }}
      >
        Leaderboard: All Applicants
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress size={40} />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && applicants.length === 0 && (
        <Typography variant="body1" textAlign="center" mt={4} color="text.secondary">
          No applicants found yet.
        </Typography>
      )}

      {!loading && !error && applicants.length > 0 && (
        <Grid container spacing={3} mt={2}>
          {applicants.map(({ _id, name, email, role }) => (
            <Grid item xs={12} sm={6} key={_id}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {name} <Typography component="span" color="primary.main">({role})</Typography>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {email}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Admin;
