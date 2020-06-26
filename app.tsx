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

  componentDidMount() {
    this.setState(
      {
        startX: this.startRef.current.getBoundingClientRect().x,
        startY: this.startRef.current.getBoundingClientRect().y,
        endX: this.endRef.current.getBoundingClientRect().x,
        endY: this.endRef.current.getBoundingClientRect().y,
      },
      () => {
        console.log("app start x", this.state.startX);
        console.log("app start y", this.state.startX);
        console.log("app end x", this.state.endX);
        console.log("app end y", this.state.endY);
      }
    );
  }

  render() {
    return (
      <main>
        <div id="foreground">
          <p className="array" id="arrayid">
            <span ref={this.startRef} id="start">
              [1,
            </span>{" "}
            2, 3, 4, 5, 6, 7, 8, 9,{" "}
            <span ref={this.endRef} id="end">
              10]
            </span>
          </p>
        </div>
        <CanvasComponent
          startX={this.state.startX}
          startY={this.state.startY}
          endX={this.state.endX}
          endY={this.state.endY}
        />
      </main>
    );
  }
}

export default App;
