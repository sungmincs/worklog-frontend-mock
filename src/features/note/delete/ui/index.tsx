import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { ViewModel } from "../model";

export const DeleteButton = ({ id, model }: ViewModel) => {
  return (
    <IconButton
      aria-label="delete"
      size="small"
      onClick={() => model.removeTodo(id)}
    >
      <DeleteIcon fontSize="inherit" />
    </IconButton>
  );
};
