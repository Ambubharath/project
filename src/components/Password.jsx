import React, { useState } from 'react';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Password = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleToggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <h1 style={{ color: 'white' }}>CHANGE YOUR PASSWORD</h1>

      <TextField
        id="current-password"
        label="CURRENT PASSWORD"
        type={showCurrentPassword ? 'text' : 'password'}
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        variant="outlined"
        InputLabelProps={{
          style: { color: 'white' }, // Label color
        }}
        InputProps={{
          style: { color: 'white' }, // Text color
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle current password visibility"
                onClick={handleToggleCurrentPasswordVisibility}
                edge="end"
                style={{ color: 'white' }} // Icon color
              >
                {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <TextField
        id="new-password"
        label="NEW PASSWORD"
        type={showNewPassword ? 'text' : 'password'}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        variant="outlined"
        InputLabelProps={{
          style: { color: 'white' }, // Label color
        }}
        InputProps={{
          style: { color: 'white' }, // Text color
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle new password visibility"
                onClick={handleToggleNewPasswordVisibility}
                edge="end"
                style={{ color: 'white' }} // Icon color
              >
                {showNewPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <TextField
        id="confirm-new-password"
        label="CONFIRM NEW PASSWORD"
        type={showConfirmPassword ? 'text' : 'password'}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        variant="outlined"
        InputLabelProps={{
          style: { color: 'white' }, // Label color
        }}
        InputProps={{
          style: { color: 'white' }, // Text color
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={handleToggleConfirmPasswordVisibility}
                edge="end"
                style={{ color: 'white' }} // Icon color
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <Button
        color="primary"
        sx={{
          bgcolor: 'violet',
          '&:hover': {
            bgcolor: 'purple',
          },
          color: 'white',
        }}
        variant="contained"
      >
        CONFIRM
      </Button>
    </>
  );
};

export default Password;
