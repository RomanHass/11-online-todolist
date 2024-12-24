import { Grid, Paper } from "@mui/material";
import { Todolist } from "./Todolist/Todolist";
import { useAppSelector } from "../../../../app/hooks";
import { selectTodolists } from "../../model/todolists-selectors";

export const Todolists = () => {
  const todolists = useAppSelector(selectTodolists);

  return (
    <>
      {todolists.map((tl) => {
        return (
          <Grid key={tl.id}>
            <Paper sx={{ p: "0 20px 20px 20px" }}>
              <Todolist todolist={tl} />
            </Paper>
          </Grid>
        );
      })}
    </>
  );
};