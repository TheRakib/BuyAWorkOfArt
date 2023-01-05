import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Layouts } from "./components/Layouts";
import { About } from "./components/pages/About";
import { Login } from "./components/pages/Login";
import { Artwork } from "./components/pages/Artwork";
import { ShoppingBag } from "./components/pages/ShoppingBag";
import { Art } from "./components/pages/Art";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />}></Route>
          <Route path="/artwork" element={<Artwork />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/art" element={<Art />}></Route>
          <Route path="/shoppingCart" element={<ShoppingBag />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
