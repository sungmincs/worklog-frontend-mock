import { useDeleteNote } from "@/entities/note/models/note";

export type ViewModel = {
  id: string;
  model: ReturnType<typeof useViewModel>;
};

export const useViewModel = () => {
  const { mutate: noteMutate } = useDeleteNote();
  return {
    removeTodo: (id: string) => {
      noteMutate(id);
    }
  };
};
