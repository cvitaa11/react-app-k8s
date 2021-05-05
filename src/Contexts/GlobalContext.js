import React, { createContext, useState } from "react";
import StatusModal from "../Components/Common/StatusModal";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [statusModal, setStatusModal] = useState({
    show: false,
    text: "",
    handleHide: () => setStatusModal({ ...setStatusModal, show: false }),
  });

  return (
    <GlobalContext.Provider value={{ setStatusModal }}>
      {props.children}
      <StatusModal
        show={statusModal.show}
        text={statusModal.text}
        handleHide={statusModal.handleHide}
      />
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
