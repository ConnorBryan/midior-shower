import * as React from "react";
import { HStack } from "@chakra-ui/react";
import { AiOutlineFunction } from "react-icons/ai";
import { GiAlienStare, GiMusicSpell, GiSpellBook } from "react-icons/gi";
import { GrCatalog } from "react-icons/gr";
import Action from "./Action";
import ActionScreen from "./ActionScreen";
import { TransmuseScreen } from "./screens";

export default function ActionGroup() {
  const actions = [
    {
      id: "log",
      icon: <GrCatalog />,
      inner: <div>Log</div>,
    },
    {
      id: "lore",
      icon: <GiAlienStare />,
      inner: <div>Lore</div>,
    },
    {
      id: "transmuse",
      icon: <GiMusicSpell />,
      inner: <TransmuseScreen />,
    },
    {
      id: "motifs",
      icon: <GiSpellBook />,
      inner: <div>Motifs</div>,
    },
    {
      id: "fx",
      icon: <AiOutlineFunction />,
      inner: <div>FX</div>,
    },
  ];
  const [activeActionIndex, setActiveActionIndex] = React.useState(
    // actions.findIndex((action) => action.id === "transmuse")
    2
  );
  const activeAction = actions[activeActionIndex];
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
        {actions.map((action, index) => (
          <Action
            key={index}
            icon={action.icon}
            isActive={activeActionIndex === index}
            onClick={() => {
              handleCloseScreen();
              setActiveActionIndex(index);
            }}
          />
        ))}
      </HStack>
      <ActionScreen isOpen={activeActionIndex > -1} onClose={handleCloseScreen}>
        {activeAction?.inner}
      </ActionScreen>
    </>
  );
}
