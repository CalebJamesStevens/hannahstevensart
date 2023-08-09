"use client";
import React from "react";

import HannahHeroImage from "../../../../public/HannahHero.png";

import {
  Alert,
  Box,
  Button,
  Card,
  List,
  ListItem,
  Snackbar,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme, { laBelleAurore } from "../ThemeRegistry/theme";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";
import { artPieces } from "@/app/artPieces";

const styles: Record<string, SxProps<Theme>> = {
  seeMoreLink: {
    textDecoration: "underline",
  },
  artList: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  artCard: {
    width: "100%",
    height: "100px",
  },
  formInput: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  leftImage: {
    backgroundImage: "url(Mobile_Flowers_Background.png)",
    position: "absolute",
    top: 0,
    height: "100%",
    width: "450px",
  },
  rightImage: {
    backgroundImage: "url(Mobile_Flowers_Background.png)",
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
  mobileHero: (theme) => ({
    background: theme.palette.primary.main,
    paddingX: 2,
    paddingTop: 2,
    width: "350px",
    height: "454px",
    backdropFilter: "blur(5px)",
    boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 0.25)",
  }),
};

export default function HomePage() {
  const isMobileMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [error, setError] = React.useState<string | null>(null);
  const [emailSent, setEmailSent] = React.useState(false);

  return (
    <Stack
      alignItems={"center"}
      sx={{
        backgroundImage: isMobileMatch
          ? "url(Mobile_Flowers_Background.png)"
          : "none",
        paddingTop: 4,
        position: "relative",
        [theme.breakpoints.up("sm")]: {
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-20%",
            height: "100%",
            width: "450px",
            backgroundImage: "url(Mobile_Flowers_Background.png)",
            backgroundSize: "contain",
            zIndex: -1,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: "-20%",
            height: "100%",
            width: "450px",
            backgroundImage: "url(Mobile_Flowers_Background.png)",
            backgroundSize: "contain",
            zIndex: -1,
          },
        },
      }}
      gap={20}
    >
      {isMobileMatch ? (
        <Stack sx={styles.mobileHero}>
          <Typography fontSize={32} fontFamily={laBelleAurore.style.fontFamily}>
            Hello,
          </Typography>
          <Typography paddingX={4}>
            As a proud Bend, Oregon native, my artistic journey is a reflection
            of the vibrant community and rich culture that shaped me, infusing
            my creations with a unique sense of identity and belonging.
          </Typography>
          <Image
            height={270}
            width={318}
            style={{
              objectFit: "cover",
            }}
            src={HannahHeroImage}
            alt="Picture of Hannah Stevens hold a plant and her daughter"
          />
        </Stack>
      ) : (
        <>
          <Stack
            sx={{
              paddingX: 2,
              paddingTop: 2,
            }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={10}
          >
            <Box maxWidth={353}>
              <Typography
                fontSize={32}
                fontFamily={laBelleAurore.style.fontFamily}
              >
                Hello,
              </Typography>
              <Typography paddingX={4}>
                As a proud Bend, Oregon native, my artistic journey is a
                reflection of the vibrant community and rich culture that shaped
                me, infusing my creations with a unique sense of identity and
                belonging.
              </Typography>
            </Box>
            <Image
              height={270}
              width={202.5}
              style={{
                objectFit: "cover",
                background: theme.palette.primary.main,
                boxShadow: "8px 8px 0px 0px rgba(0, 0, 0, 0.25)",
              }}
              src={HannahHeroImage}
              alt="Picture of Hannah Stevens hold a plant and her daughter"
            />
          </Stack>
        </>
      )}
      <Stack alignItems={"center"}>
        <Typography textAlign={"center"} variant="h2">
          My Work
        </Typography>
        <List sx={styles.artList}>
          <ListItem>
            <Image
              height={240}
              style={{
                objectFit: "contain",
              }}
              src={artPieces[0].img}
              alt={artPieces[0].title}
              loading="lazy"
            />
          </ListItem>
        </List>

        <Button
          sx={styles.seeMoreLink}
          href="/work"
          color="inherit"
          endIcon={<ArrowForward />}
        >
          More Work
        </Button>
        <Button
          sx={styles.seeMoreLink}
          href="/shop"
          color="inherit"
          endIcon={<ArrowForward />}
        >
          Shop
        </Button>
      </Stack>
      <Stack
        id="contact"
        component={"form"}
        gap={2}
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;
          const formData = new FormData(form);
          const res = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify({
              message: formData.get("message"),
              name: formData.get("name"),
              email: formData.get("email"),
              number: formData.get("number"),
            }),
            cache: "no-store",
          });

          if (!res.ok) {
            console.error("Failed to send message");
            setError("Failed to send message");
            return;
          }

          setEmailSent(true);
        }}
      >
        <Typography sx={styles.formInput} textAlign={"center"} variant="h2">
          Have a question or request?
        </Typography>
        <TextField
          sx={styles.formInput}
          required
          variant="filled"
          label="Name"
          name="name"
        />
        <TextField
          sx={styles.formInput}
          type="email"
          required
          variant="filled"
          label="Email"
          name="email"
        />
        <TextField
          sx={styles.formInput}
          type="tel"
          variant="filled"
          label="Number"
          name="number"
        />
        <TextField
          sx={styles.formInput}
          variant="filled"
          label="Message"
          multiline
          name="message"
          minRows={4}
        />
        <Button
          variant="outlined"
          color="inherit"
          sx={{ marginBottom: 2 }}
          type="submit"
        >
          Send It!
        </Button>
      </Stack>
      <Snackbar
        autoHideDuration={6000}
        open={!!error || emailSent}
        onClose={() => {
          setError(null);
          setEmailSent(false);
        }}
      >
        <Alert severity={error ? "warning" : "success"}>
          <Typography>{error || "Message sent!"}</Typography>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
