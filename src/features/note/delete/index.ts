import { ViewModel, useViewModel } from "./model";
import { DeleteButton as Component } from "./ui";

export const NoteDeleteButton = ({ id }: Pick<ViewModel, "id">) =>
  Component({ id, model: useViewModel() });
