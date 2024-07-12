import {
  QueryClient,
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from "@tanstack/react-query";
import { todoQueryOptions } from "../api/queries";

export const useTodo = () => {
  const todoQuery = useSuspenseQuery(todoQueryOptions.todo);
  return { todo: todoQuery.data };
};

const invalidateTodo = (queryClient: QueryClient) =>
  queryClient.invalidateQueries({
    queryKey: todoQueryOptions.todo.queryKey
  });

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    ...todoQueryOptions.createTodo,
    onSuccess: () => invalidateTodo(queryClient)
  });
  return mutate;
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    ...todoQueryOptions.updateTodo,
    onSuccess: () => invalidateTodo(queryClient)
  });
  return mutate;
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    ...todoQueryOptions.deleteTodo,
    onSuccess: () => invalidateTodo(queryClient)
  });
  return mutate;
};
