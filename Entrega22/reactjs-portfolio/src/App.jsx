import * as React from "react";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { Projects } from "./components/pages/Projects";
import { Experience } from "./components/pages/Experience";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>  
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </main>
      <Footer /> 
    </> 
  );
}

export default App;
