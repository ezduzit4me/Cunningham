import { Flex, Text, useTheme } from "@aws-amplify/ui-react";

export function Footer() {
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={tokens.space.medium}>
      <Text> CUNNINGHAM APARTMENTS <br/>
       66 Lamington St New Farm 4005 </Text>
    </Flex>
  );
}