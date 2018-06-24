import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { StoreContext } from "../Store";

export const DrawingProgress = () => {
  return (
    <StoreContext.Consumer>
      {ctx => {
        return ctx.isDrawing ? <LinearProgress /> : null;
      }}
    </StoreContext.Consumer>
  );
};
