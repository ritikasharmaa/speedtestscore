"use client";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from ".";
import { Provider } from "react-redux";
import { store } from "../store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Provider store={store}>
        {children}
      </Provider>
    </ChakraProvider>
  );
}
