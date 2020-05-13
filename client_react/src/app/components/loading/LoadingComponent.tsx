import React, { FC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingComponent: FC = (): JSX.Element => {
  return (
    <div className="container">
      <CircularProgress />
    </div>
  );
};

export default LoadingComponent;
