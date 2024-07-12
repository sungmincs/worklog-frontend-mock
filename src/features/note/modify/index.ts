import { Note } from "@/shared/api/note/models";
import { useViewModel } from "./model";
import { NoteModifyInput as Component } from "./ui";

interface Props {
  title: Note["title"];
  id: Note["id"];
}

export const NoteModifyInput = ({ id, title }: Props) =>
  Component({ id, title, model: useViewModel() });
