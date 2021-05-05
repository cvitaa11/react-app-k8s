import { Route } from "react-router-dom";

const PublicRoute = ({ layout: Layout, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default PublicRoute;
