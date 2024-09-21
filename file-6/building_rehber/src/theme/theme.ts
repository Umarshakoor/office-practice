import { createTheme, alpha } from "@mui/material";
import {
  amber,
  blue,
  blueGrey,
  lightBlue,
  lightGreen,
  pink,
  red,
} from "@mui/material/colors";

const background = "#171a1f";
const bodyBackground = "#111111";

 
  const isDarkMode = mode === "dark";

  return createTheme({
    palette: {
      mode,
      primary: {
        main: blue["A700"],
        light: isDarkMode ? blue["A400"] : alpha(blue["A100"], 0.2),
      },
      secondary: {
        main: pink["A700"],
      },
      success: {
        main: lightGreen["A700"],
      },
      error: {
        main: red["A400"],
      },
      warning: {
        main: amber["A700"],
      },
      divider: isDarkMode ? blue["800"] : blueGrey["100"],
      background: {
        default: isDarkMode ? background : grey[50],
        paper: isDarkMode ? background : grey[50],
      },
    },

    shape: {
      borderRadius: 8,
    },

    spacing: 8,
    typography: {
      fontFamily: [
        "Noto Sans",
        "Poppins",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
      ].join(","),
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h1: {
        fontSize: "5rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "3.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "3rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "2.125rem",
        fontWeight: 600,
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: 600,
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          root: {
            colorScheme: isDarkMode ? "dark" : "light",
          },
          html: {
            minHeight: "100%",
          },
          body: {
            minHeight: "100%",
            backgroundColor: isDarkMode ? bodyBackground : blueGrey[50],
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right",
            backgroundSize: "100%",
          },
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
          disableFocusRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
        },
        contained: {},
      },
      sizeSmall: {
        padding: "2px 12px",
      },
      sizeMedium: {
        padding: "6px 18px",
      },
      sizeLarge: {
        padding: "8px 24px",
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: "0",
          bodyBackground: isDarkMode ? background : grey[50],
        },
      },
    },
  });
};
