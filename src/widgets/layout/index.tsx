import { Grid } from "@mui/material";

import { PropsWithChildren } from "react";
import { LeftSideBar } from "../lsb/ui";

const Content = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      item
      xs={9}
      sx={{
        maxHeight: "100vh",
        overflow: "auto"
      }}
    >
      {children}
    </Grid>
  );
};

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Grid
      container
      sx={{
        maxHeight: "100vh",
        overflow: "hidden"
      }}
    >
      {children}
    </Grid>
  );
};

Layout.Lsb = LeftSideBar;
Layout.Content = Content;
