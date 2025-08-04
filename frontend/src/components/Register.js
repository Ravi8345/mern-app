import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Card,
  CardContent,
  Alert,
  InputAdornment,
  Grid,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Intern',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/applicants', formData);
      setSuccess('Application submitted successfully!');
      setFormData({ name: '', email: '', role: 'Intern' });
    } catch (err) {
      setError('Failed to submit application.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#4d86dcff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Card elevation={5} sx={{ maxWidth: 500, width: '100%' }}>
        <CardContent>

          <Box display="flex" justifyContent="center" mb={2}>
            <img src="/logo.png" alt="Logo" style={{ height: 60 }} />
          </Box>

          <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
            Join Us
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
            Register as an Intern or Volunteer
          </Typography>

          {success && <Alert severity="success" sx={{ mt: 2 }}>{success}</Alert>}
          {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 4 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  select
                  label="Choose Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <WorkOutlineIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="Intern">Intern</MenuItem>
                  <MenuItem value="Volunteer">Volunteer</MenuItem>
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #2196F3, #21CBF3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(to right, #1976D2, #00BCD4)',
                    },
                  }}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Register;
