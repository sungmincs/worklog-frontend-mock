import { useTodo } from "@/entities/todo/models/todo";
import { Datable } from "@/shared/utils/datable/datable";

export type ViewModel = ReturnType<typeof useViewModel>;

export const useViewModel = () => {
  const { todo } = useTodo();
  const dateController = new Datable(todo);
  const sortedData = dateController.sortDataByDate("내림차순");

  return {
    todoByDate: dateController.groupByCreatedAt(sortedData)
  };
};
