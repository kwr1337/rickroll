import React, { useState } from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  TextField, 
  Button
} from '@mui/material';
import styled from 'styled-components';
import { submitContactForm } from '../api/contactApi';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
  width: 100%;

  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: #555;
    }
    &.Mui-focused fieldset {
      border-color: #333;
    }
  }
`;

const SubmitButton = styled(Button)`
  background-color: #333;
  color: white;
  width: 100%;
  padding: 0.8rem;
  &:hover {
    background-color: #444;
  }
`;

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await submitContactForm(formData);
      setResponseMessage(response.message);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              Message generated on the server
            </Typography>
            <Typography variant="h5">
              {responseMessage}
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <FormTitle variant="h3">
          Only CTA on the page
        </FormTitle>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <StyledTextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
            <StyledTextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
            <SubmitButton type="submit" variant="contained">
              Submit
            </SubmitButton>
          </form>
        </FormContainer>
      </Container>
    </Box>
  );
};

export default ContactPage; 