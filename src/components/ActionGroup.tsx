import * as React from "react";
import { HStack } from "@chakra-ui/react";
import { AiOutlineFunction } from "react-icons/ai";
import { GiAlienStare, GiMusicSpell, GiSpellBook } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import Action from "./Action";
import ActionScreen from "./ActionScreen";

export default function ActionGroup() {
  const transmuseIndex = 2;
  const [activeActionIndex, setActiveActionIndex] = React.useState(
    transmuseIndex
  );
  const handleCloseScreen = () => setActiveActionIndex(-1);

  return (
    <>
      <HStack
        spacing={0}
        justify="center"
        borderTopWidth={2}
        borderColor="gray.400"
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
            isActive={activeActionIndex === index}
            onClick={() => {
              if (activeActionIndex === index) {
                handleCloseScreen();
              } else {
                handleCloseScreen();

                setTimeout(() => {
                  setActiveActionIndex(index);
                }, 100);
              }
            }}
          />
        ))}
      </HStack>
      <ActionScreen
        isOpen={activeActionIndex > -1}
        onClose={handleCloseScreen}
      />
    </>
  );
}
