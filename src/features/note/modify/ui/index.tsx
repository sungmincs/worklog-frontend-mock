import { NoteInput } from "@/entities/note/ui/input";
import { Note } from "@/shared/api/note/models";
import { ViewModel } from "../model";

interface Props {
  title: Note["title"];
  id: Note["id"];
  model: ViewModel;
}

export const NoteModifyInput = ({ title, id, model }: Props) => {
  return (
    <NoteInput
      defaultValue={title}
      onChange={(event) => model.handleChange(event, id)}
    />
  );
};
