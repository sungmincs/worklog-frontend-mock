import { styled } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { grey } from "@mui/material/colors";

export const Textarea = styled(BaseTextareaAutosize)`
  box-sizing: border-box;
  width: 100%;

  font-family: inherit;
  font-size: 14px;

  border: none;
  box-shadow: none;
  resize: none;
  background-color: transparent;

  &::placeholder {
    color: ${grey[500]};
  }

  &:focus {
    outline: 0;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`;
