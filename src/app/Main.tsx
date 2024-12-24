import { Container, Grid } from "@mui/material";
import { AddItemForm } from "../common/components/AddItemForm/AddItemForm";
import { useAppDispatch } from "./hooks";
import { Todolists } from "../features/todolists/ui/Todolists/Todolists";
import { addTodolistAC } from "../features/todolists/model/todolists-reducer";

export const Main = () => {

  const dispatch = useAppDispatch()

  const addTodolist = (title: string) => {
		dispatch(addTodolistAC(title))
	}

  return (
    <Container fixed>
      <Grid container sx={{ mb: "30px" }}>
        <AddItemForm addItem={addTodolist} />
      </Grid>
      <Grid container spacing={4}>
        <Todolists />
      </Grid>
    </Container>
  );
};
