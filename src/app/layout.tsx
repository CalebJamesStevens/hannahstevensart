import type { Metadata } from "next";
import ThemeRegistry from "./components/ThemeRegistry/ThemeRegistry";
import { Container, CssBaseline } from "@mui/material";
import Banner from "./components/Banner/Banner";
import { Analytics } from "@vercel/analytics/react";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "H Stevens Art",
  description: "View and shop for art by H Stevens",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <CssBaseline />
          <Banner />
          <Socials />
          <Container sx={{ overflowX: "hidden" }} component={"main"}>
            {children}
          </Container>
          <Footer />
        </ThemeRegistry>
        <Analytics />
      </body>
    </html>
  );
}
