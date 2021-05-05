import GlobalContextProvider from "../../Contexts/GlobalContext";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <GlobalContextProvider>
      <Header />
      {props.children}
      <Footer />
    </GlobalContextProvider>
  );
};

export default Layout;
