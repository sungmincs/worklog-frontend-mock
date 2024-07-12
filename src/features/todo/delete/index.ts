import { ViewModel, useViewModel } from "./model";
import { DeleteButton as Component } from "./ui";

export const TodoDeleteButton = ({ id }: Pick<ViewModel, "id">) =>
  Component({ id, model: useViewModel() });
