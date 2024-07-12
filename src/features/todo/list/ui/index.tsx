import { Empty } from "@/shared/ui/Empty";
import { List, ListItem, Typography } from "@mui/material";
import { ViewModel } from "../model/viewModel";
import { grey } from "@mui/material/colors";
import { TodoListItem } from "./item";
import { Todo } from "@/shared/api/todo/models";
import { PREFIX_CLASS_NAME_FOR_MENU } from "@/entities/menus/const";

const TodoList = ({ todo }: { todo: Todo[] }) => {
  return (
    <List>
      {todo.map((item) => (
        <TodoListItem {...item} />
      ))}
    </List>
  );
};

export const TodoListByDate = ({ todoByDate }: ViewModel) => {
  if (!todoByDate.length) {
    return <Empty>현재 등록된 할일이 없습니다</Empty>;
  }

  return (
    <List>
      {todoByDate.map((todo) => {
        const date = Object.keys(todo)[0];
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
                fontWeight: "medium",
                paddingBottom: "4px",
                borderBottom: `1px solid ${grey[300]}`
              }}
            >
              {date}
            </Typography>
            <TodoList todo={todo[date]} />
          </ListItem>
        );
      })}
    </List>
  );
};
