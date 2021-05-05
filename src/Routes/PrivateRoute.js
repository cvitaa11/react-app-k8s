import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const { isLogged } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
