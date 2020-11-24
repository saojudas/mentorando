import React, { createContext } from 'react';

interface HandleContextData {
  toggleTheme(): void;
}

const HandleContext = createContext<HandleContextData>({} as HandleContextData);

export const HandlesProvider: React.FC<HandleContextData> = ({
  toggleTheme,
  children,
}) => {
  return (
    <HandleContext.Provider value={{ toggleTheme }}>
      {children}
    </HandleContext.Provider>
  );
};

export default HandleContext;
