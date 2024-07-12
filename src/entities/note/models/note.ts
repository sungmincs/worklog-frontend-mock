import {
  QueryClient,
  useMutation,
  useQueryClient,
  useSuspenseQuery
} from "@tanstack/react-query";
import { notesQueryOptions } from "../api/queries";

export const useNote = () => {
  const notesQuery = useSuspenseQuery(notesQueryOptions.notes);
  return { notes: notesQuery.data };
};

const invalidateNotes = (queryClient: QueryClient) =>
  queryClient.invalidateQueries({
    queryKey: notesQueryOptions.notes.queryKey
  });

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    ...notesQueryOptions.createNote,
    onSuccess: () => invalidateNotes(queryClient)
  });
  return mutate;
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    ...notesQueryOptions.updateNote,
    onSuccess: () => invalidateNotes(queryClient)
  });
  return mutate;
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  const mutate = useMutation({
    ...notesQueryOptions.deleteNote,
    onSuccess: () => invalidateNotes(queryClient)
  });
  return mutate;
};
