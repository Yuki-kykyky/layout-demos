import React from "react";
import { Container, Stack } from "@mui/material";
import { BaseTextInput } from "@/app/common/ui/text-input";
import { InputButton } from "@/app/common/ui/buttons";
import {
  Description,
  EmphasizedDescription,
} from "@/app/common/ui/description";
import { v4 } from "@/app/constants/v4";

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
          <Description description={v4.emailConnect.description} />
        </Stack>
      </Stack>
    </Container>
  );
}
