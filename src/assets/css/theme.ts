import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      light: '#90C459',
      main: '#78B637',
      dark: '#70AC30',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#ACAEB5',
      main: '#646569',
      dark: '#595a5e',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          backgroundColor: 'white',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '4px 16px',
          fontFamily: "'Titillium Web', sans-serif",
          fontWeight: 600,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.12)',
          borderRadius: 36,
          letterSpacing: '.5px',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorSecondary: {
          color: '#A8A8A8',
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        marginNormal: {
          marginTop: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '20px !important',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#78B637',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#78B637',
          },
          '.Mui-disabled': {
            fontWeight: 600,
          },
        },
        input: {
          padding: '4px 0 5px',
          fontSize: 14,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        shrink: {
          padding: '0 10px',
          fontFamily: "'Titillium Web', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          textTransform: 'uppercase',
          color: '#78B637',
          backgroundColor: 'white',
          transform: 'translate(14px, -7px) scale(0.75)',
          borderRadius: 12,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#78B637',
          },
          '& legend': {
            marginLeft: 4,
          },
        },
      },
    },
  },
});
