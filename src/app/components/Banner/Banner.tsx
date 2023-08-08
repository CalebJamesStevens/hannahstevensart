"use client";
import React from "react";

import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import {
  ContactPage,
  Email,
  Instagram,
  Menu,
  MenuOpen,
  Shop,
} from "@mui/icons-material";
import theme from "../ThemeRegistry/theme";
import LogoIcon from "./LogoIcon";

export const Banner = () => {
  const [mainMenuOpen, setMainMenuOpen] = React.useState(false);
  const isMobileMatch = useMediaQuery(theme.breakpoints.down("sm"));

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
          <Stack direction={"row"} alignItems={"center"}>
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
            {isMobileMatch && (
              <>
                <Box
                  component={"hr"}
                  sx={{
                    all: "unset",
                    height: "4px",
                    width: "4px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                  }}
                />
                <IconButton
                  target="_blank"
                  href="https://www.instagram.com/hannahstevensart"
                  size="small"
                  color="secondary"
                >
                  <Instagram />
                </IconButton>
              </>
            )}
          </Stack>
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
