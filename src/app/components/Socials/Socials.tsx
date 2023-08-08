"use client";

import { Instagram } from "@mui/icons-material";
import { IconButton, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../ThemeRegistry/theme";

export default function Socials() {
  const isMobileMatch = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobileMatch) return null;

  return (
    <Stack
      sx={{
        position: "sticky",
        top: "50%",
        left: "100%",
        width: "min-content",
        backgroundColor: "secondary.main",
        zIndex: (theme) => theme.zIndex.fab,
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <IconButton
        target="_blank"
        href="https://www.instagram.com/hannahstevensart"
        size="small"
      >
        <Instagram htmlColor="white" />
      </IconButton>
    </Stack>
  );
}
