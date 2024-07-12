import { todo } from "@/shared/api/todo";
import { queryOptions } from "@tanstack/react-query";

export const todoQueryOptions = {
  todo: queryOptions({
    queryKey: ["todo"],
    queryFn: () => todo.get()
  }),
  createTodo: {
    mutationFn: todo.create
  },
  updateTodo: {
    mutationFn: todo.updateDetail
  },
  deleteTodo: {
    mutationFn: todo.deleteDetail
  }
};
