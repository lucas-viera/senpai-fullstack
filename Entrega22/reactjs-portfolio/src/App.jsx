import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
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
      {/* <Routes>  
        <Route path="/" exact component={<Home />} />
        <Route path="/projects" component={<Projects />} />
        <Route path="/experience" component={<Experience />} />
        <Route path="/contact" component={<Contact />} />
      </Routes> */}
      <Home /> 
      <Footer /> 
    </> 
  );
}

export default App;
