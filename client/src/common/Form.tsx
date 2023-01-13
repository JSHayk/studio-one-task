import { ChangeEvent, FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

interface IForm {
  submit?: (e: ChangeEvent<HTMLFormElement>) => void;
}

const Form: FC<IForm & ICommon> = ({ submit, children, className = "" }) => {
  return (
    <form onSubmit={submit} className={`form ${className}`}>
      {children}
    </form>
  );
};

export default memo(Form);
