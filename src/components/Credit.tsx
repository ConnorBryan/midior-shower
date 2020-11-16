import * as React from "react";
import { Box, Stat, StatLabel, StatHelpText } from "@chakra-ui/react";

interface Props {
  title: string;
  creator: string;
}

export default function Credit({ title, creator }: Props) {
  return (
    <Box>
      <Stat textAlign="end">
        <StatLabel fontSize="24px" fontWeight="bolder">
          {title}
        </StatLabel>
        <StatHelpText fontSize="16px" fontWeight="bold">
          by {creator}
        </StatHelpText>
      </Stat>
    </Box>
  );
}
