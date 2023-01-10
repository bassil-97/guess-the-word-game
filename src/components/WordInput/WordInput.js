import * as React from "react";
import TextField from "@mui/material/TextField";

export default function WordInput({ handleWordChange }) {
  return (
    <TextField
      id="standard-basic"
      variant="standard"
      className="mb-4"
      inputProps={{
        className: "text-light",
      }}
      onChange={handleWordChange}
    />
  );
}
