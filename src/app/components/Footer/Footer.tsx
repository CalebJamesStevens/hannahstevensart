"use client";
import React from "react";

import { Stack, Typography, useMediaQuery } from "@mui/material";
import theme from "../ThemeRegistry/theme";
import LogoIcon from "./LogoIcon";

export const Footer = () => {
  const [mainMenuOpen, setMainMenuOpen] = React.useState(false);
  const isMobileMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      width={"100%"}
      padding={4}
      alignItems={"center"}
      sx={{ backgroundColor: "secondary.main" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <LogoIcon
          sx={{ border: "1px solid white", borderRadius: "50%" }}
          fontSize="large"
        />
        <Typography color={"white"}>
          Copyright @ 2023 Hannah Stevens Art.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
