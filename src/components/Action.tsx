import * as React from "react";
import { Center, HStack, IconButton } from "@chakra-ui/react";
import { AiOutlineFunction } from "react-icons/ai";
import { GiAlienStare, GiMusicSpell, GiSpellBook } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";

interface Props {
  icon: React.ReactElement;
  isActive?: boolean;
  onClick(e: any): void;
}

export default function Action({ icon, isActive = false, onClick }: Props) {
  return (
    <Center bg="blue.700" width="20vw" height="12.5vh" position="relative">
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
      />
    </Center>
  );
}

interface GroupProps {
  activeIndex: number;
  onSelectActionIndex(actionIndex: number): void;
}

Action.Actions = ({ activeIndex, onSelectActionIndex }: GroupProps) => (
  <HStack
    spacing={0}
    justify="center"
    borderWidth={2}
    borderBottom="gray.400"
    opacity={0.75}
  >
    {[
      <GrCatalog />,
      <GiAlienStare />,
      <GiMusicSpell />,
      <GiSpellBook />,
      <AiOutlineFunction />,
    ].map((icon, index) => (
      <Action
        key={index}
        icon={icon}
        isActive={activeIndex === index}
        onClick={() => {
          if (activeIndex !== index) {
            onSelectActionIndex(index);
          }
        }}
      />
    ))}
  </HStack>
);
