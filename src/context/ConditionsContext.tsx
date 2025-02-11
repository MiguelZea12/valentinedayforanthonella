import React, { createContext, useState, useContext } from "react";

interface ConditionsContextType {
  accepted: boolean;
  toggleAccepted: () => void;
}

const ConditionsContext = createContext<ConditionsContextType | undefined>(undefined);

export const ConditionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accepted, setAccepted] = useState<boolean>(false);

  const toggleAccepted = () => {
    setAccepted((prev) => !prev);
  };

  return (
    <ConditionsContext.Provider value={{ accepted, toggleAccepted }}>
      {children}
    </ConditionsContext.Provider>
  );
};

export const useConditions = (): ConditionsContextType => {
  const context = useContext(ConditionsContext);
  if (!context) {
    throw new Error("useConditions debe usarse dentro de un ConditionsProvider");
  }
  return context;
};
