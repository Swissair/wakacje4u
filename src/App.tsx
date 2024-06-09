import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import "./assets/css/style.css";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="" Component={Home} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
