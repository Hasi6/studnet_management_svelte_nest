import React from "react";
import AuthorizedWrapper from "../../components/wrappers/AuthorizedWrapper/AuthorizedWrapper";

const Home = () => {
  return (
    <AuthorizedWrapper>
      <h1>Home Page</h1>
    </AuthorizedWrapper>
  );
};

export default Home;
