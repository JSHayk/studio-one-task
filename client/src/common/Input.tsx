import { FC, ChangeEvent, memo } from "react";
import { ICommon } from "../interfaces/common.d";

interface IInput {
  type?: string;
  value?: string;
  plc?: string;
  change?: (e: string) => void;
}

const Input: FC<IInput & ICommon> = ({
  type = "text",
  value = "",
  change,
  plc,
  className = "",
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={plc}
      onChange={(e: ChangeEvent<HTMLInputElement>) => change!(e.target.value)}
      className={`input ${className}`}
    />
  );
};

export default memo(Input);
