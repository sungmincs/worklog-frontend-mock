import { ThemeProvider as Theme, createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { PropsWithChildren } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: grey[600]
    },
    error: {
      main: red[400]
    }
  }
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <Theme theme={theme}>{children}</Theme>;
};
