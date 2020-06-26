import * as React from "react";
import { createRef } from "react";
import Circle from "./components/canvas";
import CanvasComponent from "./components/canvas";

interface AppState {
  startX: number;
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
    };
  }

  componentDidMount() {
    // console.log("ref", this.startRef.current.getBoundingClientRect());
    //@ts-ignore
    // this.state.startX = this.startRef.current.getBoundingClientRect().x;
    this.setState(
      { startX: this.startRef.current.getBoundingClientRect().x },
      () => {
        console.log("current state x", this.state.startX);
      }
    );
    // this.startY = this.startRef.current.getBoundingClientRect().y;
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
        <CanvasComponent startX={this.state.startX} />
      </main>
    );
  }
}

export default App;
