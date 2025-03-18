import React from "react";
import { Header } from "@/app/components/screen-to-code/components/v2/header";
import { Footer } from "@/app/components/screen-to-code/components/v2/footer";
import { Container } from "@mui/material";
import { FooterBanner } from "./screen-to-code/components/v2/footer-banner";

interface SharedLayoutProps {
  children: React.ReactNode;
}

export function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <>
      <Container maxWidth={"lg"}>
        <Header />
        <main className="flex-grow">{children}</main>
        <FooterBanner />
      </Container>
      <Footer />
    </>
  );
}
