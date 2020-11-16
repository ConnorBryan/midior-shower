import * as React from "react";
import { HStack, IconButton } from "@chakra-ui/react";
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
    <IconButton
      aria-label="..."
      bg="blue.700"
      width="20vw"
      height="12.5vh"
      fontSize="40px"
      icon={icon}
      borderRadius={0}
      isActive={isActive}
      onClick={onClick}
    />
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
        onClick={onSelectActionIndex}
      />
    ))}
  </HStack>
);
