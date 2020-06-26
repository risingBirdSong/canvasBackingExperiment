import * as React from "react";

interface canvasProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
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
    console.log(
      "start x -->",
      this.props.startX,
      "start y -->",
      this.props.startY,
      "end x -->",
      this.props.endX,
      "end y -->",
      this.props.endY
    );
    const canvas = this.refs.canvas as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 300, 300);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.props.startX, this.props.startY);
    // ctx.lineTo(100, 100);
    // ctx.moveTo(this.props.startX, this.props.startY + 50);
    ctx.lineTo(this.props.endX, this.props.endY);
    ctx.stroke();
  }
  render() {
    return <canvas ref="canvas" width={800} height={600} />;
  }
}

export default CanvasComponent;
