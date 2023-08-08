import React from "react";
import { Text, HStack, Switch, useColorMode } from "native-base";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack alignItems="center" space={2}>
      <Text>Dark</Text>
      <Switch
        onToggle={toggleColorMode}
        isChecked={colorMode === "light"}
      ></Switch>
      <Text>Light</Text>
    </HStack>
  );
}
