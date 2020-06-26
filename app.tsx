import * as React from "react";
import { createRef } from "react";
import Circle from "./components/canvas";
import CanvasComponent from "./components/canvas";

interface AppState {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

class App extends React.Component<{}, AppState> {
  private startRef: React.RefObject<HTMLCanvasElement>;
  private endRef: React.RefObject<HTMLCanvasElement>;

  private startY: number;
  constructor(props) {
    super(props);
    this.startRef = React.createRef();
    this.endRef = React.createRef();
    this.state = {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <main>
        <div id="foreground"></div>
        <CanvasComponent />
      </main>
    );
  }
}

export default App;
