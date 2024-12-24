import { AppBar, Toolbar, IconButton, Switch } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { MenuButton } from "../MenuButton/MenuButton";
import { changeThemeAC } from "../../../app/app-reducer";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectTheme } from "../../../app/app-selectors";
import { getTheme } from "../../theme/theme";

export const Header = () => {
	const themeMode = useAppSelector(selectTheme)

  const theme = getTheme(themeMode)
  
  const dispatch = useAppDispatch()

  const changeModeHandler = () => {
		dispatch(changeThemeAC(themeMode === "light" ? "dark" : 'light'))
	}

  return (
    <AppBar position="static" sx={{ mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <div>
          <MenuButton>Login</MenuButton>
          <MenuButton>Logout</MenuButton>
          <MenuButton background={theme.palette.primary.dark}>Faq</MenuButton>
          <Switch color={"default"} onChange={changeModeHandler} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
