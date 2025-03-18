import React from "react";
import { Header } from "@/app/screen-to-code/components/v2/header";
import { Footer } from "@/app/screen-to-code/components/v2/footer";
import { Container } from "@mui/material";

interface SharedLayoutProps {
  children: React.ReactNode;
}

export function SharedLayout({ children }: SharedLayoutProps) {
  return (
    <Container maxWidth={"lg"}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </Container>
  );
}
