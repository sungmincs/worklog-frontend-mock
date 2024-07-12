export interface Note {
  title: string;
  id: string;
  created_date: string;
  updated_date: string;
}

export type NotePayload = Pick<Note, "title">;
export type CreateNoteResponse = Pick<Note, "id">;
