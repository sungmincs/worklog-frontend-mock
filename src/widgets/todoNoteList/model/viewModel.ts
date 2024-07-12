import { useNote } from "@/entities/note/models/note";
import { useTodo } from "@/entities/todo/models/todo";
import { Datable } from "@/shared/utils/datable/datable";

export type ViewModel = ReturnType<typeof useViewModel>;

const useTodoWithNote = () => {
  const { todo } = useTodo();
  const { notes } = useNote();

  const todoController = new Datable([...notes, ...todo]);

  const sortedData = todoController.sortDataByDate("내림차순");
  return { todoNote: todoController.groupByCreatedAt(sortedData) };
};

export const useViewModel = () => {
  return {
    ...useTodoWithNote()
  };
};
