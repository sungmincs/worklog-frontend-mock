import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";

export const Empty = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        p: 2,
        border: `1px solid ${grey[300]}`,
        borderRadius: 4,
        backgroundColor: grey[100]
      }}
    >
      <Typography variant="body2" color="GrayText">
        {children}
      </Typography>
    </Box>
  );
};
