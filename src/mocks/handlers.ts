import { BASE_URL as NOTE_BASE_URL } from "@/shared/api/note";
import { NotePayload } from "@/shared/api/note/models";
import { BASE_URL as TODO_BASE_URL } from "@/shared/api/todo";
import { TodoPayload } from "@/shared/api/todo/models";
import { HttpResponse, PathParams, http } from "msw";
import { initialNotes, initialTodos } from "./initial";

const allTodo = new Map(initialTodos.map((todo) => [todo.id, todo]));
const allNote = new Map(initialNotes.map((note) => [note.id, note]));

export const handlers = [
  http.get(TODO_BASE_URL, () => {
    return HttpResponse.json(Array.from(allTodo.values()));
  }),

  http.post<PathParams, TodoPayload>(TODO_BASE_URL, async ({ request }) => {
    const newTodo = await request.json();
    const id = crypto.randomUUID().replace(/-/g, "");
    const cratedTodo = {
      id,
      ...newTodo,
      created_date: new Date().toString(),
      updated_date: new Date().toString()
    };
    allTodo.set(id, cratedTodo);

    return HttpResponse.json(cratedTodo, { status: 201 });
  }),

  http.delete<{ id: string }>(`${TODO_BASE_URL}/:id`, ({ params }) => {
    const id = params.id;
    if (!id) {
      return new HttpResponse(null, { status: 400 });
    }

    const deletedTodo = allTodo.get(id);

    if (!deletedTodo) {
      return new HttpResponse(null, { status: 404 });
    }

    allTodo.delete(id);
    return HttpResponse.json(deletedTodo);
  }),

  http.put<{ id: string }, TodoPayload>(
    `${TODO_BASE_URL}/:id`,
    async ({ request, params }) => {
      const { id } = params;
      const nextTodo = await request.json();
      const updateTodo = allTodo.get(id);

      if (!updateTodo) {
        return new HttpResponse(null, { status: 404 });
      }

      const updatedTodo = {
        ...updateTodo,
        ...nextTodo
      };

      allTodo.set(id, updatedTodo);
      return HttpResponse.json(updatedTodo);
    }
  ),

  http.get(NOTE_BASE_URL, () => {
    return HttpResponse.json(Array.from(allNote.values()));
  }),

  http.post<{}, NotePayload>(NOTE_BASE_URL, async ({ request }) => {
    const newNote = await request.json();
    const id = crypto.randomUUID().replace(/-/g, "");
    const cratedNote = {
      id,
      ...newNote,
      created_date: new Date().toString(),
      updated_date: new Date().toString()
    };
    allNote.set(id, cratedNote);

    return HttpResponse.json(cratedNote, { status: 201 });
  }),

  http.put<{ id: string }, NotePayload>(
    `${NOTE_BASE_URL}/:id`,
    async ({ request, params }) => {
      const { id } = params;

      if (!id) {
        return new HttpResponse(null, { status: 400 });
      }

      const nextNote = await request.json();
      const updateNote = allNote.get(id);

      if (!updateNote) {
        return new HttpResponse(null, { status: 404 });
      }

      const updatedTodo = {
        ...updateNote,
        ...(nextNote as object)
      };

      allNote.set(id, updatedTodo);
      return HttpResponse.json(updatedTodo);
    }
  ),

  http.delete<{ id: string }>(`${NOTE_BASE_URL}/:id`, ({ params }) => {
    const { id } = params;

    if (!id) {
      return new HttpResponse(null, { status: 400 });
    }

    const deleteNote = allNote.get(id);

    if (!deleteNote) {
      return new HttpResponse(null, { status: 404 });
    }

    allNote.delete(id);
    return HttpResponse.json(deleteNote);
  })
];
