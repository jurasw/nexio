import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import "./styles.css";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
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
