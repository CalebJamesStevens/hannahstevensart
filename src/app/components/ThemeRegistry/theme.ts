import { Roboto, Open_Sans, Crimson_Text, La_Belle_Aurore } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const crimsonText = Crimson_Text({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  subsets: ['latin']
})

export const laBelleAurore = La_Belle_Aurore({
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  subsets: ['latin']
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF930F'
    }
  },
  typography: {
    fontFamily: crimsonText.style.fontFamily,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '.2rem',
      lineHeight: 1.4,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
      letterSpacing: '.2rem',
      lineHeight: 1.4,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      letterSpacing: '.2rem',
      lineHeight: 1.4,
    }
  },
});

export default theme;