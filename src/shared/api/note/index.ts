import { API } from "../base";
import { CreateNoteResponse, Note, NotePayload } from "./models";

export const BASE_URL = "/api/v1/notes";

export const notes = {
  get: () => API.get<null, Note[]>(BASE_URL),
  create: (payload: NotePayload) =>
    API.post<NotePayload, CreateNoteResponse>(BASE_URL, payload),
  getDetail: (id: Note["id"]) => API.get<Note>(`${BASE_URL}/${id}`),
  updateDetail: ({ id, payload }: { id: Note["id"]; payload: NotePayload }) =>
    API.put<NotePayload, CreateNoteResponse>(`${BASE_URL}/${id}`, payload),
  deleteDetail: (id: Note["id"]) =>
    API.delete<null, boolean>(`${BASE_URL}/${id}`)
};
