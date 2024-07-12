import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ViewModel } from "../model";
import { TodoInput } from "@/features/todo/add/ui/input";
import { AddButton } from "./button";
import { NoteInput } from "@/entities/note/ui/input";

export const AddItemForm = (model: ViewModel) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{
        position: "sticky",
        bottom: 40,
        zIndex: 1,
        border: `1px solid ${grey[300]}`,
        borderRadius: 4,
        boxShadow: "1px 1px 10px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        p: 2
      }}
      component="form"
      onSubmit={model.onSubmit}
    >
      <TodoInput />
      <NoteInput />
      <AddButton />
    </Box>
  );
};
