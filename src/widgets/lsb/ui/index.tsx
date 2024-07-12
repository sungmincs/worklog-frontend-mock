import { Logo } from "@/shared/ui/Logo";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { DateList } from "./items";

export const LeftSideBar = () => {
  return (
    <Grid
      item
      xs={3}
      sx={{
        borderRight: `1px solid ${grey[300]}`,
        height: "100vh",
        width: 250
      }}
    >
      <Box
        component="h1"
        display="flex"
        alignItems="center"
        gap={1}
        sx={{ p: 2 }}
      >
        <Logo width="24" height="24" />
        <Typography variant="h6" component="span">
          Worklog
        </Typography>
      </Box>
      <Divider />
      <DateList />
    </Grid>
  );
};
