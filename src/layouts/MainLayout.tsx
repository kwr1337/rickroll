import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  position: sticky;
  top: 0;
`;

const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  padding: 1rem 0;
  margin-top: auto;
`;

const ContactButton = styled(Button)`
  background-color: #333;
  color: white;
  &:hover {
    background-color: #444;
  }
`;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>
      <StyledAppBar>
        <Toolbar>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography 
              variant="h6" 
              sx={{ textDecoration: 'none', color: 'inherit' }}
            >
              <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Some Company
              </RouterLink>
            </Typography>
            <ContactButton 
              variant="contained" 
              onClick={() => window.location.href = '/contact'}
            >
              Contact us
            </ContactButton>
          </Container>
        </Toolbar>
      </StyledAppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <StyledFooter>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            Some Company {new Date().getFullYear()}
          </Typography>
        </Container>
      </StyledFooter>
    </Box>
  );
};

export default MainLayout; 