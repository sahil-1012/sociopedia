import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from 'scenes/homePage/HomePage';
import LoginPage from 'scenes/loginPage/Login';
import ProfilePage from 'scenes/profilePage/ProfilePage';
import { themeSettings } from 'theme';

const App = () => {
  const mode = useSelector((state) => state.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <CssBaseline>

            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/profile/:userId' element={<ProfilePage />} />
            </Routes>

          </CssBaseline>
        </ThemeProvider>
      </BrowserRouter>


    </div >
  )
};

export default App