import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';

import Home from './components/Home';
import Register from './components/Register';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <AppBar position="static" color="primary">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Intern/Volunteer Portal
            </Typography>
            <Box>
              <Button component={Link} to="/" color="inherit">Home</Button>
              <Button component={Link} to="/register" color="inherit">Register</Button>
              <Button component={Link} to="/admin" color="inherit">Leaderboard</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
