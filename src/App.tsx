import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./styles.css";
const App: React.FC = () => {
  const theme = extendTheme({
    components: {
      Button: {
        _focus: {
          outline: "none",
        },
      },
    },
  });
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
