export interface Todo {
  title: string;
  completed: boolean;
  id: string;
  created_date: string;
  updated_date: string;
}

export type TodoPayload = Pick<Todo, "title" | "completed">;
export type CreateTodoResponse = Pick<Todo, "id">;
