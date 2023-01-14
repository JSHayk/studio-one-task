import { FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

const Button: FC<ICommon> = ({ children, className = "", click }) => {
  return (
    <button onClick={click} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default memo(Button);
