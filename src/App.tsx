import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
// import assetImage from "/assets/images/hero_bg_3.jpg";

function App() {
  //  const imageUrl = new URL("/src/assets/images/hero_bg_3.jpg", import.meta.url);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" Component={Home} />
        {/* <Route path="/gallery" Component={Gallery} />
      <Route path="/contact" Component={Contact} /> */}
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
