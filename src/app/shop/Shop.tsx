"use client";

import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Link,
  Snackbar,
  Stack,
  SxProps,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import theme from "../components/ThemeRegistry/theme";
import React from "react";
import { ArtPiece, artPieces } from "../artPieces";
import Image from "next/image";

const styles: Record<string, SxProps<Theme>> = {
  seeMoreLink: {
    textDecoration: "underline",
  },
  artList: {
    width: "100%",
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
};

export default function Work() {
  const [error, setError] = React.useState<string | null>(null);
  const [emailSent, setEmailSent] = React.useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const [currentImage, setCurrentImage] = React.useState<ArtPiece>(
    artPieces[0]
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [shopDialogOpen, setShopDialogOpen] = React.useState(false);

  return (
    <Box>
      <Typography variant="h1">Shop</Typography>
      <Typography>
        If you would like to see all of my art I have created, please{" "}
        <Link color="inherit" href="/shop">
          visit my work page
        </Link>
        !
      </Typography>
      <Divider sx={{ borderColor: theme.palette.primary.main, marginTop: 2 }} />
      <ImageList
        cols={isDesktop ? 3 : isTablet ? 2 : 1}
        gap={50}
        sx={{ width: "100%" }}
      >
        {artPieces.map((item) => (
          <Button
            onClick={() => {
              setCurrentImage(item);
              setDialogOpen(true);
            }}
            key={item.title}
            color="inherit"
          >
            <ImageListItem cols={1}>
              <Image
                height={240}
                style={{
                  objectFit: "contain",
                }}
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={"$" + item.price} position="below" />
              <ImageListItemBar title={item.title} position="below" />
            </ImageListItem>
          </Button>
        ))}
      </ImageList>
      <Dialog
        open={dialogOpen}
        title={currentImage.title}
        onClose={() => setDialogOpen(false)}
      >
        <DialogTitle>
          <Typography variant="h2">{currentImage.title}</Typography>
          <Typography>${currentImage.price}</Typography>
        </DialogTitle>
        <DialogContent>
          <Image
            height={240}
            style={{
              objectFit: "contain",
            }}
            src={currentImage.img}
            alt={currentImage.title}
            loading="lazy"
          />
          <DialogContentText>
            <Typography>{currentImage.description}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              setDialogOpen(false);
              setShopDialogOpen(true);
            }}
          >
            Inquire
          </Button>
          <Button color="inherit" onClick={() => setDialogOpen(false)}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={shopDialogOpen}
        title={currentImage.title}
        PaperProps={{
          sx: {
            minWidth: "450px",
            [theme.breakpoints.down("sm")]: {
              minWidth: "90vw",
            },
          },
        }}
        onClose={() => setDialogOpen(false)}
        component={"form"}
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
              subject: `Art Piece Inquiry: ${currentImage.title}`,
            }),
            cache: "no-store",
          });

          if (!res.ok) {
            console.error("Failed to send message");
            setError("Failed to send message");
            return;
          }

          setEmailSent(true);
          setShopDialogOpen(false);
        }}
      >
        <DialogTitle>
          <Typography variant="h2">{currentImage.title}</Typography>
          <Typography>${currentImage.price}</Typography>
        </DialogTitle>
        <DialogContent>
          <Stack id="contact" gap={2}>
            <Typography
              sx={styles.formInput}
              textAlign={"center"}
              variant="h2"
              component={"p"}
            >
              Art Inquiry
            </Typography>
            <TextField
              fullWidth
              sx={styles.formInput}
              required
              variant="filled"
              label="Name"
              name="name"
            />
            <TextField
              fullWidth
              sx={styles.formInput}
              type="email"
              required
              variant="filled"
              label="Email"
              name="email"
            />
            <TextField
              fullWidth
              sx={styles.formInput}
              type="tel"
              variant="filled"
              label="Number"
              name="number"
            />
            <TextField
              fullWidth
              sx={styles.formInput}
              variant="filled"
              label="Message"
              multiline
              name="message"
              minRows={4}
              required
              defaultValue={`I'm interested in purchasing your artwork "${currentImage.title}" priced at $${currentImage.price}.`}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            onClick={() => {
              setShopDialogOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="small"
            type="submit"
            sx={{ fontWeight: "bold" }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
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
    </Box>
  );
}
