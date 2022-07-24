import { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

type Props = {
  children: React.ReactNode;
};

export const MediaQueryContext = createContext(false);

export const MediaQueryProvider = ({ children }: Props) => {
  const isWide = useMediaQuery({ minWidth: 960 });
  return (
    <MediaQueryContext.Provider value={isWide}>
      {children}
    </MediaQueryContext.Provider>
  );
};
