"use client";
import { Box, Button, Container, Typography } from "@mui/material";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Container>
      <Box
        height="70vh"
        display="flex"
        flexDirection="column"
        textAlign="center"
        alignContent="center"
        justifyContent="Space-around"
      >
        <Typography variant="h1">
          Welcome to the guess the number game!
        </Typography>
        <Button variant="contained" onClick={() => router.push("/game")}>
          Start game!
        </Button>
      </Box>
    </Container>
  );
}
