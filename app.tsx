import * as React from "react";
import Circle from "./components/canvas";
import CanvasComponent from "./components/canvas";
import Foreground from "./components/foreground";

const App = () => {
  return (
    <main>
      <Foreground />
      <CanvasComponent />
    </main>
  );
};

export default App;
