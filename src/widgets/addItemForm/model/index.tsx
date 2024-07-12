import { useCreateNote } from "@/entities/note/models/note";
import { useCreateTodo } from "@/entities/todo/models/todo";
import { Typography } from "@mui/material";
import { FormEvent } from "react";
import { toast } from "react-toastify";

export type ViewModel = ReturnType<typeof useViewModelForm>;

export const useViewModelForm = () => {
  const { mutate: todoCreate } = useCreateTodo();
  const { mutate: noteCreate } = useCreateNote();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const todoTitle = formData.get("todoTitle")?.toString() ?? "";
    const noteTitle = formData.get("noteTitle")?.toString() ?? "";

    if (!todoTitle && !noteTitle) {
      toast.error(
        <Typography variant="body2">
          <b>할 일</b>이나 <b>메모</b> 중 하나를 입력해 주세요!
        </Typography>
      );
      return;
    }

    if (noteTitle) {
      noteCreate(
        { title: noteTitle },
        {
          onSuccess: () => {
            form.reset();
          }
        }
      );
    }

    if (todoTitle) {
      todoCreate(
        { title: todoTitle, completed: false },
        {
          onSuccess: () => {
            form.reset();
          }
        }
      );
    }
  };

  return { onSubmit };
};
