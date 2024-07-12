import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ComponentProps } from "react";

export const AddButton = (props: ComponentProps<typeof Button>) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Button
        type="submit"
        variant="contained"
        startIcon={<AddIcon />}
        color="primary"
        sx={{
          boxShadow: "none"
        }}
        {...props}
      >
        추가하기
      </Button>
    </Box>
  );
};
