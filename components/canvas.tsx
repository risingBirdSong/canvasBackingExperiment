import * as React from "react";

interface canvasProps {
  startX: number;
  // startX : number;
}
class CanvasComponent extends React.Component<canvasProps> {
  componentDidMount() {
    console.log("from canvas :", this.props.startX);
    this.updateCanvas();
  }
  componentDidUpdate() {
    console.log("from canvas after update:", this.props.startX);
    this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(350, 250);
    ctx.stroke();
  }
  render() {
    return <canvas ref="canvas" width={600} height={400} />;
  }
}

export default CanvasComponent;
