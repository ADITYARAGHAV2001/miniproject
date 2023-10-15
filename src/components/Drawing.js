import './DrawingCanvas.css';
import { useEffect, useRef, useState } from 'react';

const Drawing = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 300;
        canvas.height = 300;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;
    }, []);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        setIsDrawing(true);
        nativeEvent.preventDefault();
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        const context = contextRef.current;
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    };

    const saveImageToLocal = (event) => {
        let link = event.currentTarget;
        link.setAttribute('download', 'canvas.png');
        let image = canvasRef.current.toDataURL('image/png');
        link.setAttribute('href', image);
    };

  return (
    <div>
          <canvas className="canvas-container"
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}>
          </canvas>
          <div>
              <button type="button" className="btn btn-primary mx-2" onClick={clearCanvas}>Clear Canvas</button>
              <button type="button" className="btn btn-primary mx-2"><a id="download_image_link" href="download_link" style = {{color: 'white', textDecoration: 'none'}}onClick={saveImageToLocal}>Download Image</a></button>

          </div>
    </div>
  )
}

export default Drawing
