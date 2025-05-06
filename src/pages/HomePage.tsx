import React from 'react';
import { Typography, Container, Box, Button, Card, CardContent } from '@mui/material';
import styled from 'styled-components';
import YouTubeVideo from '../components/YouTubeVideo';

const Hero = styled.section`
  padding: 4rem 0;
  background-color: #f5f5f5;
`;

const Title = styled(Typography)`
  font-weight: bold;
`;

const SubTitle = styled(Typography)`
  margin-top: 2rem;
  text-align: center;
`;

const FeatureCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactButton = styled(Button)`
  background-color: #333;
  color: white;
  &:hover {
    background-color: #444;
  }
  margin-top: 1rem;
`;

// Создаем простую сетку для размещения элементов
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  align-items: center;
`;

const GridItem = styled.div<{ xs?: number; sm?: number; md?: number }>`
  grid-column: span ${props => props.xs || 12};
  
  @media (min-width: 600px) {
    grid-column: span ${props => props.sm || props.xs || 12};
  }
  
  @media (min-width: 960px) {
    grid-column: span ${props => props.md || props.sm || props.xs || 12};
  }
`;

const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  margin-top: 32px;
  
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Hero>
        <Container>
          <GridContainer>
            <GridItem xs={12} md={6}>
              <Title variant="h3" gutterBottom>
                Most important title on the page
              </Title>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum efficitur, sem sem commodo eros, vel euismod nibh lorem malesuada erat.
              </Typography>
              <ContactButton
                variant="contained" 
                onClick={() => window.location.href = '/contact'}
              >
                Contact us
              </ContactButton>
            </GridItem>
            <GridItem xs={12} md={6}>
              <YouTubeVideo 
                videoId="dQw4w9WgXcQ"
                title="YouTube video"
              />
            </GridItem>
          </GridContainer>
        </Container>
      </Hero>

      <Box py={6}>
        <Container>
          <SubTitle variant="h4" gutterBottom>
            Also very important title
          </SubTitle>
          <GridCards>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <FeatureCard key={item}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Title
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
                  </Typography>
                </CardContent>
              </FeatureCard>
            ))}
          </GridCards>
        </Container>
      </Box>

      <Box py={6} sx={{ backgroundColor: '#f5f5f5' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Less important title
          </Typography>
          <Box display="flex" justifyContent="center" mt={3}>
            <ContactButton
              variant="contained"
              onClick={() => window.location.href = '/contact'}
            >
              Contact us
            </ContactButton>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage; 