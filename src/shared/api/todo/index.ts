import { API } from "../base";
import { CreateTodoResponse, Todo, TodoPayload } from "./models";

export const BASE_URL = "/api/v1/todos";

export const todo = {
  get: () => API.get<null, Todo[]>(BASE_URL),
  create: (payload: TodoPayload) =>
    API.post<TodoPayload, CreateTodoResponse>(BASE_URL, payload),
  getDetail: (id: Todo["id"]) => API.get<null, Todo>(`${BASE_URL}/${id}`),
  updateDetail: ({ id, payload }: { id: Todo["id"]; payload: TodoPayload }) =>
    API.put<TodoPayload, CreateTodoResponse>(`${BASE_URL}/${id}`, payload),
  deleteDetail: (id: Todo["id"]) =>
    API.delete<null, boolean>(`${BASE_URL}/${id}`)
};
