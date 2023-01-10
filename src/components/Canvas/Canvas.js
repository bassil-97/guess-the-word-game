import { useState } from "react";
import CanvasDraw from "react-canvas-draw";
import "./Canvas.css";

import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import UndoIcon from "@mui/icons-material/Undo";

function Canvas() {
  const [canvas, setBrush] = useState("#000000");
  const [brush, setThick] = useState(1);
  let saveableCanvas;

  return (
    <div className="canvas-container">
      <CanvasDraw
        ref={(canvasDraw) => (saveableCanvas = canvasDraw)}
        brushColor={canvas}
        brushRadius={parseInt(brush)}
        canvasHeight={400}
        canvasWidth={800}
      />
      <div className="canvas-toolbar">
        <Button
          variant="contained"
          startIcon={<AutoFixHighIcon />}
          onClick={() => {
            saveableCanvas.eraseAll();
          }}
        >
          Erase
        </Button>

        <Button
          variant="contained"
          startIcon={<UndoIcon />}
          onClick={() => {
            saveableCanvas.undo();
          }}
        >
          Undo
        </Button>

        <div className="tooltip-item">
          <label>Brush Color</label>
          <input
            style={{ background: { canvas } }}
            type="color"
            value={canvas}
            onChange={(event) => {
              setBrush(event.target.value);
            }}
          />
        </div>
        <div className="tooltip-item flex-column">
          <label>Brush Thickness</label>
          {/* <div className="thickness" style={style}></div> */}
          <Slider
            min={1}
            defaultValue={1}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={(event) => {
              setThick(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Canvas;
