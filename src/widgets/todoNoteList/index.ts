import { useViewModel } from "./model/viewModel";
import { TodoWithNote as Component } from "./ui";

export const TodoWithNote = () => Component(useViewModel());
