import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useTodo } from "@/entities/todo/models/todo";
import { scrollToElement } from "../../model/scrollToElement";
import { Datable } from "@/shared/utils/datable/datable";
import { PREFIX_CLASS_NAME_FOR_MENU } from "@/entities/menus/const";

export const DateList = () => {
  const { todo } = useTodo();
  const todoController = new Datable(todo);
  const sortied = todoController.sortDataByDate("내림차순");
  const grouped = todoController.groupByCreatedAt(sortied);
  const dates = grouped.map((item) => Object.keys(item).at(0));

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="h6" id="nested-list-subheader">
          Summary
        </ListSubheader>
      }
    >
      {dates.length ? (
        dates.map((item) => (
          <ListItemButton
            key={item}
            sx={{ borderRadius: 2 }}
            onClick={() => {
              const element = document.querySelector(
                `.${PREFIX_CLASS_NAME_FOR_MENU}${item}`
              );
              if (element instanceof HTMLElement) {
                scrollToElement(element);
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 28 }}>
              <FiberManualRecordIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText secondary={item} />
          </ListItemButton>
        ))
      ) : (
        <ListItemText
          secondary="현재 데이터가 없습니다"
          sx={{
            padding: "0 16px"
          }}
        />
      )}
    </List>
  );
};
