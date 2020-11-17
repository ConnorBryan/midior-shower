import React from "react";
import {
  Alert,
  AlertIcon,
  Button,
  Center,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

export default function TransmuseScreen() {
  const [amplitude, setAmplitude] = React.useState(100);
  const [showingAlert, setShowingAlert] = React.useState(false);
  const mostRecentDamageTaken = React.useRef(0);

  React.useEffect(() => {
    if (showingAlert) {
      setTimeout(() => setShowingAlert(false), 2000);
    }
  }, [showingAlert]);

  return (
    <>
      {showingAlert && (
        <Alert
          status="error"
          position="fixed"
          top="13vh"
          left="2vw"
          width="96vw"
        >
          <AlertIcon />
          You took {mostRecentDamageTaken.current} damage!
        </Alert>
      )}
      <Center position="absolute" top="0" left="0" width="100%" height="100%">
        <CircularProgress
          value={amplitude}
          color="red.400"
          size="266px"
          thickness="6px"
        >
          <CircularProgressLabel>
            <Button
              colorScheme="red"
              onClick={() => {
                const damage = Math.floor(Math.random() * 10);

                mostRecentDamageTaken.current = damage;

                setAmplitude((prevAmplitude) =>
                  Math.max(prevAmplitude - damage, 0)
                );
                setShowingAlert(true);
              }}
            >
              Take Damage
            </Button>
          </CircularProgressLabel>
        </CircularProgress>
      </Center>
    </>
  );
}
