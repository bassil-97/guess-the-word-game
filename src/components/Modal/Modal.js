import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function Modal(props) {
  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Your Answer</DialogTitle>
        <DialogContent>
          {props.trueGuess && (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_9aa9jkxv.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                autoplay
              ></lottie-player>
              <h4>
                Correct, the word was{" "}
                <mark className="text-success">
                  {localStorage.getItem("SelectedWord")}
                </mark>
              </h4>
            </div>
          )}
          {!props.trueGuess && (
            <div className="d-flex align-items-center justify-content-center flex-column">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_pqpmxbxp.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                autoplay
              ></lottie-player>
              <h4>
                Wrong Answer, the word was{" "}
                <mark className="text-danger">
                  {localStorage.getItem("SelectedWord")}
                </mark>
              </h4>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Close</Button>
          <Button onClick={props.handleRestartGame}>play again</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
