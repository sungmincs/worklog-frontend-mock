import { ComponentProps } from "react";
import { Textarea } from "./styles";

export const NoteInput = (props: ComponentProps<typeof Textarea>) => {
  return (
    <Textarea name="noteTitle" placeholder="메모를 추가해보세요" {...props} />
  );
};
