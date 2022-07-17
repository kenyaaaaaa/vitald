import { createContext, useContext } from "react";
import { useMedia } from "react-use";

type Props = {
  children: React.ReactNode;
};

const MediaQueryContext = createContext(false);

export const MediaQueryProvider = ({ children }: Props) => {
  const isWide = useMedia("( minWidth: 768px)", false);
  return (
    <MediaQueryContext.Provider value={isWide}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useQueryContext = () => useContext(MediaQueryContext);
