import { TodoListItem } from "@/features/todo/list/ui/item";
import { Empty } from "@/shared/ui/Empty";
import { List, ListItem, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import type { ViewModel } from "../model/viewModel";
import type { Todo } from "@/shared/api/todo/models";
import type { Note } from "@/shared/api/note/models";
import { NoteItem } from "@/features/note/listItem";
import { PREFIX_CLASS_NAME_FOR_MENU } from "@/entities/menus/const";

interface Props {
  todoNote: (Todo | Note)[];
}

const TodoNoteList = ({ todoNote }: Props) => {
  return (
    <List>
      {todoNote?.map((item) => {
        if ("completed" in item) {
          return (
            <TodoListItem
              key={item.id}
              completed={item.completed}
              title={item.title}
              id={item.id}
            />
          );
        } else {
          return (
            <NoteItem key={item.id}>
              <NoteItem.Input id={item.id} title={item.title} />
              <NoteItem.Delete id={item.id} />
            </NoteItem>
          );
        }
      })}
    </List>
  );
};

export const TodoWithNote = ({ todoNote, ...props }: ViewModel) => {
  if (!todoNote.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {todoNote.map((items) => {
        const date = Object.keys(items)[0];
        return (
          <ListItem
            key={date}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch"
            }}
          >
            <Typography
              className={PREFIX_CLASS_NAME_FOR_MENU + date}
              variant="body1"
              component="h5"
              sx={{
                scrollMargin: "40px",
                fontWeight: "medium",
                paddingBottom: "4px",
                borderBottom: `1px solid ${grey[300]}`
              }}
            >
              {date}
            </Typography>
            <TodoNoteList todoNote={items[date]} {...props} />
          </ListItem>
        );
      })}
    </List>
  );
};
