"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type CursorState = "default" | "project" | "tech" | "link" | "image" | "build";

interface CursorContextType {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
  buildMode: boolean;
  setBuildMode: (mode: boolean) => void;
}

const GlobalStateContext = createContext<CursorContextType | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [buildMode, setBuildMode] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ cursorState, setCursorState, buildMode, setBuildMode }}>
      <div className={buildMode ? "build-mode" : ""}>
        {children}
      </div>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) throw new Error("useGlobalState must be used within GlobalStateProvider");
  return context;
};


