import { Theme, createTheme as createThemeMui } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: string;
    purple: {
      [50]: string;
      [100]: string;
      [200]: string;
      [300]: string;
      [400]: string;
      [500]: string;
      [600]: string;
      [700]: string;
      [800]: string;
      [900]: string;
    };
    blue: {
      [50]: string;
      [100]: string;
      [200]: string;
      [300]: string;
      [400]: string;
      [500]: string;
      [600]: string;
      [700]: string;
      [800]: string;
      [900]: string;
    };
    opacity: {
      [500]: string;
    };
  }

  interface PaletteOptions {
    white: string;
    purple: {
      [50]: string;
      [100]: string;
      [200]: string;
      [300]: string;
      [400]: string;
      [500]: string;
      [600]: string;
      [700]: string;
      [800]: string;
      [900]: string;
    };
    blue: {
      [50]: string;
      [100]: string;
      [200]: string;
      [300]: string;
      [400]: string;
      [500]: string;
      [600]: string;
      [700]: string;
      [800]: string;
      [900]: string;
    };
    opacity: {
      [500]: string;
    };
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    primaryVariant500: true;
    secondaryVariant500: true;
  }
}

export const createTheme = <T extends Theme>(themeDefault?: Theme | T): Theme =>
  createThemeMui({
    palette: {
      mode: 'light',
      primary: {
        main: '#070942',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#00A0DF',
        contrastText: '#FFFFFF',
      },
      white: '#FFFFFF',
      opacity: {
        '500': 'rgba(255, 255, 255, 0.5)',
      },
      purple: {
        '50': '#F5F5F5',
        '100': '#EBECFF',
        '200': '#D6D8F9',
        '300': '#D2DCE7',
        '400': '#B780D0',
        '500': '#EF5DA8',
        '600': '#000',
        '700': '#918EC1',
        '800': '#9794C9',
        '900': '#000',
      },
      grey: {
        '50': '#000',
        '100': '#E1E1E1',
        '200': '#808080',
        '300': '#000',
        '400': '#070942',
        '500': '#000',
        '600': '#000',
        '700': '#000',
        '800': '#333333',
        '900': '#000',
      },
      blue: {
        '50': '#A4BBC2',
        '100': '#000',
        '200': '#000',
        '300': '#000',
        '400': '#000',
        '500': '#00497E',
        '600': '#000',
        '700': '#011765',
        '800': '#00011F',
        '900': '#000',
      },
    },
    typography: {
      fontFamily: 'Roboto',
    },
    components: {
      // MuiInputBase: {
      //   variants: [
      //     {
      //       props: { color: 'primary' },
      //       style: {
      //         background: 'transparent',
      //         padding: '0 10px',
      //         border: `1px solid ${themeDefault?.palette.grey[800]}`,
      //         borderRadius: '5px',
      //         '&.Mui-error': {
      //           border: `2px solid ${themeDefault?.palette.error.main}`,
      //         }
      //       },
      //     }
      //   ],
      // },
      MuiTextField: {
        defaultProps: {
          style: {
            padding: '15px !important',
          },
          size: 'small',
          // InputLabelProps: {
          //   sx: {
          //     fontSize: '14px',
          //     background: 'red'
          //   },
          // },
        },
        variants: [
          {
            props: { size: 'small' },
            style: {
              // background: 'red',
              padding: '0 !important',
              // border: `1px solid ${themeDefault?.palette.grey[800]}`,
              borderRadius: '5px',
              '&.Mui-error': {
                // border: `2px solid ${themeDefault?.palette.error.main}`,
              },
            },
          },
        ],
      },
      MuiButton: {
        defaultProps: {
          style: {
            padding: '4px 10px',
          },
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {},
          },
          {
            props: { variant: 'outlined' },
            style: {
              backgroundColor: 'transparent !important',
              color: `${themeDefault?.palette.primary.main} !important`,
            },
          },
          {
            props: { variant: 'text' },
            style: {
              backgroundColor: 'transparent !important',
              color: `${themeDefault?.palette.primary.main} !important`,
            },
          },

          {
            props: { color: 'primary' },
            style: {
              backgroundColor: themeDefault?.palette.secondary.main,
              color: themeDefault?.palette.secondary.contrastText,
              '&:hover': {
                backgroundColor: themeDefault?.palette.secondary.main,
                color: themeDefault?.palette.secondary.contrastText,
              },
            },
          },
          {
            props: { color: 'secondary' },
            style: {
              backgroundColor: themeDefault?.palette.white,
              color: themeDefault?.palette.secondary.main,
              '&:hover': {
                backgroundColor: themeDefault?.palette.white,
                color: themeDefault?.palette.secondary.main,
              },
            },
          },
          {
            props: { color: 'secondary', variant: 'outlined' },
            style: {
              borderColor: `${themeDefault?.palette.white} !important`,
              color: `${themeDefault?.palette.white} !important`,
              '&:hover': {
                backgroundColor: themeDefault?.palette.white,
                color: themeDefault?.palette.secondary.main,
              },
            },
          },
        ],
      },
      MuiToolbar: {
        defaultProps: {
          variant: 'dense',
          style: {
            background: themeDefault?.palette.purple[400],
          },
        },
      },
      MuiDrawer: {
        variants: [
          {
            props: { variant: 'persistent' },
            style: {
              '& .MuiDrawer-paper': {
                background: themeDefault?.palette.purple[300],
              },
            },
          },
        ],
      },
      MuiListItem: {
        defaultProps: {
          style: {
            color: themeDefault?.palette.purple[800],
          },
        },
      },
      MuiSvgIcon: {
        defaultProps: {
          color: 'secondary',
        },
        variants: [
          {
            props: { color: 'primary' },
            style: {
              color: themeDefault?.palette.primary.main,
            },
          },
          {
            props: { color: 'secondary' },
            style: {
              color: themeDefault?.palette.secondary.main,
            },
          },
          {
            props: { color: 'info' },
            style: {
              color: themeDefault?.palette.blue[500],
            },
          },
          {
            props: { color: 'action' },
            style: {
              color: themeDefault?.palette.purple[700],
            },
          },
          {
            props: { color: 'inherit' },
            style: {
              color: themeDefault?.palette.white,
            },
          },
        ],
      },
      MuiAlert: {
        defaultProps: {
          style: {
            width: '30vw',
            maxWidth: '500px',
          },
        },
        variants: [
          {
            props: { color: 'error' },
            style: {
              background: themeDefault?.palette.error.main,
              color: themeDefault?.palette.white,
              right: 0,
              '& .MuiAlert-icon svg': {
                color: themeDefault?.palette.white,
              },
            },
          },
          {
            props: { color: 'success' },
            style: {
              background: themeDefault?.palette.success.main,
              color: themeDefault?.palette.white,
              right: 0,
              '& .MuiAlert-icon svg': {
                color: themeDefault?.palette.white,
              },
            },
          },
          {
            props: { color: 'info' },
            style: {
              background: themeDefault?.palette.white,
              color: themeDefault?.palette.info.main,
              right: 0,
            },
          },
        ],
      },
    },
  });
