import { Checkbox, FormControlLabel } from "@mui/material";
import { ChangeEvent } from "react";

interface Props {
  title: string;
  completed: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TodoItem = ({ title, completed, onChange }: Props) => {
  return (
    <FormControlLabel
      control={
        <Checkbox checked={completed} onChange={onChange} color="primary" />
      }
      label={title}
      sx={{
        "& .MuiFormControlLabel-label": completed
          ? { textDecoration: "line-through" }
          : {}
      }}
    />
  );
};
