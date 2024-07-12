import { useUpdateNote } from "@/entities/note/models/note";
import { debounce } from "@mui/material";
import { ChangeEvent } from "react";

export type ViewModel = ReturnType<typeof useViewModel>;

export const useViewModel = () => {
  const { mutate } = useUpdateNote();

  const handleChange = debounce(
    (event: ChangeEvent<HTMLTextAreaElement>, id) => {
      const value = event.target.value;
      mutate({
        id,
        payload: {
          title: value
        }
      });
    },
    1000
  );

  return {
    handleChange
  };
};
