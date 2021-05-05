import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [statusModal, setStatusModal] = useState({
    show: false,
    text: "",
    handleHide: () => setStatusModal({ ...setStatusModal, show: false }),
  });

  return (
    <GlobalContext.Provider value={{ statusModal, setStatusModal }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
