import { styled } from "@mui/material/styles";
import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";

const drawerWidth = DRAWER_WIDTH;

export const PaletteFormNavRoot = styled("div")({
  display: "flex"
});

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "64px"

}));

export const NavBtns = styled("div")({
  marginRight: "1rem",
  '& a':{
    textDecoration: "none"
  },
  [sizes.down("xs")]: {
          marginRight: "0.5rem"
      }
});

export const StyledButton = styled(Button)({
  margin: "0 0.5rem",
  [sizes.down("xs")]: {
    margin: "0 0.2rem",
    padding: "0.3rem"
  }
});