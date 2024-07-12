import { TextField } from "@mui/material";
import { ComponentProps } from "react";

export const TodoInput = (props: ComponentProps<typeof TextField>) => {
  return (
    <TextField
      variant="standard"
      name="todoTitle"
      placeholder="오늘의 할일을 입력하세요"
      InputProps={{
        disableUnderline: true
      }}
      {...props}
    />
  );
};
