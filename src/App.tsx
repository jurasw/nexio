import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Business from "./pages/Business";
import Career from "./pages/Career";
import "./styles.css";
const App: React.FC = () => {
  return (
    <BrowserRouter >
      <ChakraProvider>
        <Routes>
          <Route >
            <Route
              index
              element={<Home />}
            />
            <Route path="/biznes" element={<Business />} />
            <Route path="/kariera" element={<Career />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
