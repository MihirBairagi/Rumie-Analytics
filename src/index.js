import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import App from './pages/App';
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Box sx={{ display: 'flex' }} className='container'>
      <nav>
        <img className='w-100' src={require("./assets/img/nav.png")} alt="" />
      </nav>
      <App />
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);
