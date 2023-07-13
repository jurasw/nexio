import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { Path } from "./pages/Paths";
import Business from "./pages/Business";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import { theme } from "./theme";
import axios from "axios";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

const App: React.FC = () => {
  axios.defaults.baseURL = "http://localhost:1337/";

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path={Path.BUSINESS} element={<Business />} />
            <Route path={Path.CAREER} element={<Career />} />
            <Route path={Path.CONTACT} element={<Contact />} />
            <Route path={Path.BLOG} element={<Blog />} />
            <Route path={Path.ARTICLE} element={<Article />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
