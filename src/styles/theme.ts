import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(198, 140, 100)',
        },
        secondary: {
            main: 'rgb(198, 110, 73)',
        },
        error: {
            main: red.A400,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'RobotoLight';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: url(/fonts/RobotoMono-Light.ttf) format('truetype');
            }
            @font-face {
              font-family: 'RobotoBold';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: url(/fonts/RobotoBold.ttf) format('truetype');
            }
            @font-face {
              font-family: 'Comfortaa';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: url(/fonts/comfortaa.ttf) format('truetype');
            }
            @media (min-width: 700px) {
                #user-form-link {
                    font-size: 30px;
                }
            }
            p {
                margin: 0;
            }
            a {
                color: rgb(198, 110, 73);
            }
            a:visited {
                color: rgb(198, 110, 73);
            }
          `,
        },
    },
    typography: {
        fontFamily: 'RobotoLight',
        button: {
            fontFamily: 'RobotoBold',
            textTransform: 'none',
        },
        h1: {
            fontFamily: 'Comfortaa',
        },
    },
});

theme.typography.h1 = {
    fontSize: '4.4rem',
    '@media (min-width:800px)': {
        fontSize: '4.4rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '3.4rem',
        paddingLeft: '10px',
        paddingRight: '10px',
        marginTop: '38px',
    },
};

theme.typography.h3 = {
    fontSize: '3.4rem',
    '@media (min-width:800px)': {
        fontSize: '3.4rem',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '2.0rem',
        paddingLeft: '0px',
        paddingRight: '0px',
    },
};

export default theme;
