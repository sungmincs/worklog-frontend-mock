import { Box, ListItem } from "@mui/material";
import { grey } from "@mui/material/colors";

import { PropsWithChildren } from "react";

export const NoteListItem = ({ children }: PropsWithChildren) => {
  return (
    <ListItem
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: grey[50],
        borderRadius: 4,
        padding: 16
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start"
        }}
      >
        {children}
      </Box>
    </ListItem>
  );
};
