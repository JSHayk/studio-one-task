import { FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

const Text: FC<ICommon> = ({ children, className = "" }) => {
  return <p className={`text ${className}`}>{children}</p>;
};

export default memo(Text);
