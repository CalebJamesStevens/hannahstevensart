"use client";
import React from "react";

import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
} from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import { ContactPage, Email, Menu, MenuOpen, Shop } from "@mui/icons-material";
import theme from "../ThemeRegistry/theme";
import LogoIcon from "./LogoIcon";

export const Banner = () => {
  const [mainMenuOpen, setMainMenuOpen] = React.useState(false);

  return (
    <AppBar
      sx={{ width: "100%" }}
      elevation={0}
      color="transparent"
      position="relative"
    >
      <Toolbar>
        <Stack
          width={"100%"}
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Button
            color="inherit"
            href="/"
            startIcon={
              <LogoIcon
                sx={{
                  fontSize: "32px!important",
                }}
              />
            }
          >
            H. Stevens
          </Button>
          <IconButton onClick={() => setMainMenuOpen(true)}>
            <Menu />
          </IconButton>
          <Drawer
            open={mainMenuOpen}
            onClose={() => setMainMenuOpen(false)}
            anchor="right"
          >
            <List>
              <ListItem>
                <ListItemButton href="/work">
                  <ListItemIcon>
                    <BrushIcon />
                  </ListItemIcon>
                  <ListItemText>My Work</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href="/shop">
                  <ListItemIcon>
                    <Shop />
                  </ListItemIcon>
                  <ListItemText>Shop</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton href="/#contact">
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText>Contact</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
