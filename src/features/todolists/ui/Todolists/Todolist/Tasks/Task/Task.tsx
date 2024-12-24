import { ListItem, Checkbox, IconButton } from "@mui/material";
import { TaskType, TodolistType } from "../../../../../../../app/App";
import DeleteIcon from "@mui/icons-material/Delete";
import { ChangeEvent } from "react";
import { useAppDispatch } from "../../../../../../../app/hooks";
import { EditableSpan } from "../../../../../../../common/components/EditableSpan/EditableSpan";
import { removeTaskAC, changeTaskStatusAC, changeTaskTitleAC } from "../../../../../model/tasks-reducer";
import { getListItemSx } from "./Task.styles";


type PropsType = {
  task: TaskType;
  todolist: TodolistType;
};

export const Task = ({ task, todolist }: PropsType) => {
  const dispatch = useAppDispatch();

  const removeTask = () => {
    dispatch(removeTaskAC({ taskId: task.id, todolistId: todolist.id }));
  };

  const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const isDone = e.currentTarget.checked;
    dispatch(
      changeTaskStatusAC({ taskId: task.id, todolistId: todolist.id, isDone })
    );
  };

  const updateTask = (title: string) => {
    dispatch(changeTaskTitleAC({ todolistId: todolist.id, taskId: task.id, title }));
  };

  return (
    <ListItem sx={getListItemSx(task.isDone)}>
      <div>
        <Checkbox checked={task.isDone} onChange={changeTaskStatus} />
        <EditableSpan
          value={task.title}
          onChange={updateTask}
        />
      </div>
      <IconButton onClick={removeTask}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
