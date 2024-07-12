import { useViewModelForm } from "./model";
import { AddItemForm as Component } from "./ui";

export const AddItemForm = () => Component(useViewModelForm());
