import * as React from "react";
import onClickOutside from "react-onclickoutside";
import { Box, SlideFade, CloseButton } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose(): void;
}

function ActionScreen({ children, isOpen, onClose }: Props) {
  (ActionScreen as any).handleClickOutside = onClose;

  return (
    <SlideFade in={isOpen}>
      <Box
        position="fixed"
        bottom="12.5vh"
        left="0"
        width="94vw"
        height="35vh"
        marginX="3vw"
        marginY="1vh"
        padding="1rem"
        bg="blue.700"
        borderRadius="md"
        borderWidth={2}
        borderColor="gray.400"
        opacity={0.75}
      >
        <CloseButton
          as="button"
          onClick={onClose}
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          size="lg"
          color="gray.400"
          zIndex={1}
        />
        {children}
      </Box>
    </SlideFade>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => (ActionScreen as any).handleClickOutside,
};

export default onClickOutside(ActionScreen, clickOutsideConfig);
