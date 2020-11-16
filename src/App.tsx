import * as React from "react";
import { Box, Center, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Action, Piece } from "./components";
import space from "./space.jpg";
import { GiAries } from "react-icons/gi";

const theme = extendTheme({
  fonts: {
    body: "Ferrum, sans-serif",
  },
});

enum Actions {
  BattleLog,
  EnemyLog,
  Transmuse,
  MotifLog,
  FxLog,
}

export default function App() {
  const [activeActionIndex, setActiveActionIndex] = React.useState(
    Actions.Transmuse
  );
  const handleSelectActionIndex = React.useCallback(
    (actionIndex: Actions) => setActiveActionIndex(actionIndex),
    []
  );

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
        <Action.Actions
          activeIndex={activeActionIndex}
          onSelectActionIndex={handleSelectActionIndex}
        />
      </Box>
    </ChakraProvider>
  );
}
