import React from "react";
import { Container, Stack } from "@mui/material";
import { BaseTextInput } from "@/app/common/components/text-input";
import { InputButton } from "@/app/common/components/buttons";
import {
  BaseDescription,
  EmphasizedDescription,
} from "@/app/common/components/descriptions";
import { v4 } from "@/app/components/reference-const/v4";

export default function EmailConnectV4() {
  return (
    <Container maxWidth="lg">
      <Stack
        alignItems="center"
        py={8}
        spacing={4}
        sx={{
          bgcolor: "grey.200",
          py: 8,
          px: 4,
        }}
      >
        <EmphasizedDescription>
          {v4.emailConnect.title1}
          <br />
          {v4.emailConnect.title2}
        </EmphasizedDescription>

        <Stack alignItems="center" spacing={2}>
          <Stack direction="row" spacing={2}>
            <BaseTextInput placeholder={v4.emailConnect.placeholder} />
            <InputButton buttonText={v4.emailConnect.buttonText} />
          </Stack>
          <BaseDescription description={v4.emailConnect.description} />
        </Stack>
      </Stack>
    </Container>
  );
}
