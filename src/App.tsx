import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import assetImage from "/assets/images/hero_bg_3.jpg";

function App() {
  const [count, setCount] = useState(0);

  const imageUrl = new URL("/src/assets/images/hero_bg_3.jpg", import.meta.url);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        {/* <img src="./img_boats_1.jpg" /> */}
        <img src="/sunflower-spike/img_boats_1.jpg" />
        <img src={imageUrl.href} alt="asset image" />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div
        style={{
          backgroundImage: `url('${imageUrl.href}')`,
        }}
      >
        Hello world
      </div>
    </>
  );
}

export default App;
