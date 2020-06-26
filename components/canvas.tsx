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
    // ctx.clearRect(0, 0, 300, 300);
    const middleWidth = canvas.width / 2;
    const middleHeight = canvas.height / 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(middleWidth, middleHeight);
    ctx.font = "italic 32px sans-serif";
    const text = "hello world from canvas";
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(text, middleWidth - textWidth / 2, middleHeight);
    ctx.stroke();
  }
  render() {
    return <canvas ref="canvas" width={800} height={600} />;
  }
}

export default CanvasComponent;
