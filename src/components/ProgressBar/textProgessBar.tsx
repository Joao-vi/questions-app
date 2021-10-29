import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

import { useLocation } from "react-router-dom";

interface ITextProgressBar {
  children: ReactNode;
  path: string;
}

export function TextProgressBar({ children, path }: ITextProgressBar) {
  const { pathname } = useLocation();

  let isActive = false;

  if (pathname === path) {
    isActive = true;
  }
  return isActive ? (
    <Text
      as="span"
      fontWeight="bold"
      color="teal.400"
      border="2px"
      borderColor="teal.400"
      px="2"
      py="1"
      boxShadow="sm"
      borderRadius={5}
    >
      {children}
    </Text>
  ) : (
    <Text as="span" fontWeight="normal" color="gray.400">
      {children}
    </Text>
  );
}
