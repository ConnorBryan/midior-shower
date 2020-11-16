import * as React from "react";
import { Center, IconButton } from "@chakra-ui/react";

interface Props {
  icon: React.ReactElement;
  isActive?: boolean;
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export default function Action({ icon, isActive = false, onClick }: Props) {
  return (
    <Center bg="blue.700" width="20vw" height="12.5vh">
      <IconButton
        aria-label="..."
        bg="blue.700"
        width="100%"
        height="100%"
        fontSize="40px"
        borderRadius={0}
        icon={icon}
        isActive={isActive}
        onClick={onClick}
        _focus={{
          boxShadow: "none",
        }}
        _hover={undefined}
      />
    </Center>
  );
}
