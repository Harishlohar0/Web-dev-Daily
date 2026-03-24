import { createContext, useContext, useState } from "react";

const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [windowState, setWindowState] = useState({
    github: false,
    notes: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  // open window
  const openWindow = (name) => {
    setWindowState((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  // close window
  const closeWindow = (name) => {
    setWindowState((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  // toggle window
  const toggleWindow = (name) => {
    setWindowState((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <WindowContext.Provider
      value={{ windowState, openWindow, closeWindow, toggleWindow }}
    >
      {children}
    </WindowContext.Provider>
  );
};

// custom hook (clean usage)
export const useWindow = () => useContext(WindowContext);
