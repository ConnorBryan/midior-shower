import * as React from "react";
import { Box, Center, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ActionGroup, Piece } from "./components";
import space from "./space.jpg";
import { GiAries } from "react-icons/gi";

const theme = extendTheme({
  fonts: {
    body: "Ferrum, sans-serif",
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg={`url(${space})`}>
        <Piece
          sign={GiAries}
          tempo={120}
          credits={{
            art: {
              asset: "",
              creator: "Example Artist",
              title: "Example Art",
            },
            song: {
              asset: "",
              creator: "Example Musician",
              title: "Example Song",
            },
          }}
        />
        <Center h="77.5vh" bg={space}></Center>
        <ActionGroup />
      </Box>
    </ChakraProvider>
  );
}
