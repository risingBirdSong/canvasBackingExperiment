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
    ctx.font = "italic 32px sans-serif";
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const text = array.toString();
    const textWidth = ctx.measureText(text).width;
    let widthOfArrEle = textWidth / array.length;
    let beginTextX = middleWidth - textWidth / 2;
    let endTextX = middleWidth + textWidth / 2;
    ctx.lineTo(middleWidth - textWidth / 2, middleHeight);
    ctx.bezierCurveTo(
      20 + beginTextX,
      100 + middleHeight,
      200 + beginTextX,
      100 + middleHeight,
      endTextX,
      middleHeight
    );
    console.log("width of ele", widthOfArrEle);
    ctx.fillText(text, middleWidth - textWidth / 2, middleHeight);
    ctx.stroke();
  }
  render() {
    return <canvas ref="canvas" width={800} height={600} />;
  }
}

export default CanvasComponent;
