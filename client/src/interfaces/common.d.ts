import { ReactNode } from "react";

export interface ICommon {
  children?: ReactNode;
  className?: string;
  click?: () => void;
}
