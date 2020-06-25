import * as React from "react";

class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 300, 300);
  }
  render() {
    return <canvas ref="canvas" width={600} height={400} />;
  }
}

export default CanvasComponent;
