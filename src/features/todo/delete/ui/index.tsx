import { Button } from "@mui/material";
import { ViewModel } from "../model";

export const DeleteButton = ({ id, model }: ViewModel) => {
  return (
    <Button
      variant="contained"
      size="small"
      color="error"
      sx={{ boxShadow: "none" }}
      onClick={() => model.removeTodo(id)}
    >
      삭제
    </Button>
  );
};
