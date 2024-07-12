import { NoteListItem } from "@/entities/note/ui/item";
import { NoteDeleteButton } from "../delete";
import { NoteModifyInput } from "../modify";

export const NoteItem = Object.assign(NoteListItem, {
  Input: NoteModifyInput,
  Delete: NoteDeleteButton
});
