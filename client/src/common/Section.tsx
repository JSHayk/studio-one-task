import { FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

const Section: FC<ICommon> = ({ children, className = "" }) => {
  return <section className={`section ${className}`}>{children}</section>;
};

export default memo(Section);
