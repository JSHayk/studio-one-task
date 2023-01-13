import { FC, memo } from "react";
import { ICommon } from "../interfaces/common";

const Title: FC<ICommon> = ({ children, className = "" }) => {
  return <h1 className={`title ${className}`}>{children}</h1>;
};

export default memo(Title);
