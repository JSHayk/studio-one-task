import { FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

const Container: FC<ICommon> = ({ children, className = "", click }) => {
  return <div onClick={click} className={`container ${className}`}>{children}</div>;
};

export default memo(Container);
