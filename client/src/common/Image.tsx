import { FC, memo } from "react";
import { ICommon } from "../interfaces/common.d";

interface IImage {
  src: string;
  alt?: string;
}

const Image: FC<IImage & ICommon> = ({ src, alt = "", className = "" }) => {
  return <img src={src} alt={alt} className={`image ${className}`} />;
};

export default memo(Image);
