import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
// import assetImage from "/assets/images/hero_bg_3.jpg";
import "./assets/css/style.css";

// import "./assets/scripts/jquery-3.3.1.min.js";
// import "./assets/scripts/jquery-ui.js";
// import "./assets/scripts/popper.min.js";
// import "./assets/scripts/bootstrap.min.js";
// import "./assets/scripts/owl.carousel.min.js";
// import "./assets/scripts/mediaelement-and-player.min.js";
// import "./assets/scripts/jquery.stellar.min.js";
// import "./assets/scripts/jquery.countdown.min.js";
// import "./assets/scripts/jquery.magnific-popup.min.js";
// import "./assets/scripts/bootstrap-datepicker.min.js";
// import "./assets/scripts/aos.js";
// import "./assets/scripts/circleaudioplayer.js";
// import "./assets/scripts/main.js";

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
