import { FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

const Container: FC<ICommon> = ({ children, className = "" }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default memo(Container);
