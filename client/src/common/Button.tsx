import { FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

const Button: FC<ICommon> = ({ children, className = "" }) => {
  return <button className={`button ${className}`}>{children}</button>;
};

export default memo(Button);
