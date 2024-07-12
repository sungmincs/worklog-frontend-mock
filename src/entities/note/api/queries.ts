import { notes } from "@/shared/api/note";
import { queryOptions } from "@tanstack/react-query";

export const notesQueryOptions = {
  notes: queryOptions({
    queryKey: ["notes"],
    queryFn: () => notes.get()
  }),
  createNote: {
    mutationFn: notes.create
  },
  updateNote: {
    mutationFn: notes.updateDetail
  },
  deleteNote: {
    mutationFn: notes.deleteDetail
  }
};
