import { useDeleteTodo } from "@/entities/todo/models/todo";

export type ViewModel = {
  id: string;
  model: ReturnType<typeof useViewModel>;
};

export const useViewModel = () => {
  const { mutate } = useDeleteTodo();
  return {
    removeTodo: (id: string) => mutate(id)
  };
};
