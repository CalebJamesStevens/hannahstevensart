"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Link,
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

export default function Work() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const [currentImage, setCurrentImage] = React.useState<ArtPiece>(
    artPieces[0]
  );
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <Box>
      <Typography variant="h1">My Work</Typography>
      <Typography>
        Not all pieces shown are for sale. If you would like to purchase a
        pieace of art please{" "}
        <Link color="inherit" href="/shop">
          visit the shop
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
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
