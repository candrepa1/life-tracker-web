import { FC, PropsWithChildren } from "react";
import { IconContext } from "react-icons";

const IconsProvider: FC<PropsWithChildren> = ({ children }) => (
  <IconContext.Provider value={{ size: "24", color: "#ffffff" }}>
    {children}
  </IconContext.Provider>
);

export default IconsProvider;
