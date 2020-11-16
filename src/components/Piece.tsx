import * as React from "react";
import { Center, HStack, Icon, Text } from "@chakra-ui/react";
import Credit from "./Credit";
import { IconType } from "react-icons";

interface Props {
  sign: IconType;
  tempo: number;
  credits: {
    art: {
      asset: string;
      title: string;
      creator: string;
    };
    song: {
      asset: string;
      title: string;
      creator: string;
    };
  };
}

export default function Piece({ sign, tempo, credits }: Props) {
  const { song, art } = credits;

  return (
    <HStack
      spacing={0}
      align="center"
      justify="center"
      borderBottomWidth={2}
      borderColor="gray.400"
      opacity={0.75}
    >
      <Center w="15vw" h="10vh" bg="blue.700" borderBottom="red.400">
        <Icon as={sign} boxSize="10vw" />
      </Center>
      <Text
        w="15vw"
        h="10vh"
        bg="blue.700"
        fontSize="32px"
        fontWeight="bolder"
        lineHeight={2.6}
        textAlign="center"
      >
        {tempo}
      </Text>
      <Center w="35vw" h="10vh" bg="blue.700">
        <Credit title={song.title} creator={song.creator} />
      </Center>
      <Center w="35vw" h="10vh" bg="blue.700">
        <Credit title={art.title} creator={art.creator} />
      </Center>
    </HStack>
  );
}
