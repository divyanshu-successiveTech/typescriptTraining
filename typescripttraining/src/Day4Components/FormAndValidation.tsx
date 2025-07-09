"use client"

import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box
} from '@mui/material';

interface ErrorValues{
    email:string,
    password:string,
    phone:string;

}

export default function FormAndValidation() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [errors, setErrors] = useState<ErrorValues>({email:"",password:"",phone:""});

  const validate = () => {
    const newErrors = {email:"",password:"",phone:""};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@')) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Must be at least 6 characters';
    }

    if (!phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = 'Phone must be 10 digits';
    }

    return newErrors;
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({email:"",password:"",phone:""});
      
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 400, margin: '2rem auto' }}>
      <Typography variant="h6" gutterBottom>
        Simple Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />
        </Box>

        <Box mb={2}>
          <TextField
            label="Phone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
        </Box>

        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
}
