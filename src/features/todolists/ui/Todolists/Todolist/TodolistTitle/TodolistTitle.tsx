import { IconButton } from "@mui/material";
import { TodolistType } from "../../../../../../app/App";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../../../../app/hooks";
import {
  changeTodolistTitleAC,
  removeTodolistAC,
} from "../../../../model/todolists-reducer";
import { EditableSpan } from "../../../../../../common/components/EditableSpan/EditableSpan";
import styles from "./TodolistTitle.module.css";

type PropsType = {
  todolist: TodolistType;
};

export const TodolistTitle = ({ todolist }: PropsType) => {
  const { title, id } = todolist;

  const dispatch = useAppDispatch();

  const removeTodolist = () => {
    dispatch(removeTodolistAC(id));
  };

  const updateTodolist = (title: string) => {
    dispatch(changeTodolistTitleAC(id, title));
  };

  return (
    <div className={styles.container}>
      <h3>
        <EditableSpan value={title} onChange={updateTodolist} />
      </h3>
      <IconButton onClick={removeTodolist}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};
