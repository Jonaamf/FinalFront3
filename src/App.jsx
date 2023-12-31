import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from "react";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Nopage from './Routes/Nopage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {ContextProvider} from "./Components/utils/global.context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/favs' element={<Favs />} />
            <Route path="*" element={<Nopage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
