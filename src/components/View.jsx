import { TextField, Box, IconButton, Input, Avatar } from '@mui/material';
import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const View = () => {
  const [image, setImage] = React.useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        {/* <Avatar
          src={image}
          alt="Profile"
          sx={{ width: 100, height: 100, marginBottom: 1 }}
        /> */}
         <img
          src="https://cdn-icons-png.freepik.com/512/5539/5539922.png"
          alt="not found"
          width="200"
          height="200"
        />
        <IconButton
          color="primary"
          component="label"
          sx={{
            color: 'white',
          }}
        >
          <Input
            type="file"
            onChange={handleImageChange}
            sx={{ display: 'none' }}
          />
          <PhotoCameraIcon />
        </IconButton>
      </Box>

      <TextField
        id="outlined-basic"
        label="NAME"
        variant="outlined"
        sx={{
          '& .MuiInputBase-input': { color: 'white' }, // Text color
          '& .MuiInputLabel-root': { color: 'white' }, // Label color
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white' // Border color
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white' // Border color on hover
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white' // Border color when focused
          }
        }}
      /><br />
      <br />

      <TextField
        id="outlined-basic"
        label="EMAIL"
        variant="outlined"
        sx={{
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          }
        }}
      /><br />
      <br />

      <TextField
        id="outlined-basic"
        label="MOBILE NO"
        variant="outlined"
        sx={{
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          }
        }}
      /><br />
      <br />

      <TextField
        id="outlined-basic"
        label="CITY"
        variant="outlined"
        sx={{
          '& .MuiInputBase-input': { color: 'white' },
          '& .MuiInputLabel-root': { color: 'white' },
          '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          }
        }}
      />
    </>
  );
}

export default View;
