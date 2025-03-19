"use client";
import React from "react";
import { Header } from "@/app/components/screen-to-code/components/v2/header";
import { Footer } from "@/app/components/screen-to-code/components/v2/footer";
import { Container, ThemeProvider } from "@mui/material";
import { FooterBanner } from "./screen-to-code/components/v2/footer-banner";
import { useThemeStore } from "../store/theme-store";
import { darkTheme, lightTheme } from "../theme";
interface SharedLayoutProps {
  children: React.ReactNode;
}

export function SharedLayout({ children }: SharedLayoutProps) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Container maxWidth={"lg"}>
        <Header />
        <main className="flex-grow">{children}</main>
        <FooterBanner />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
