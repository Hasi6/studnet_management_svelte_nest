import React, { FC } from "react";
import AuthorizedWrapper from "../../components/wrappers/AuthorizedWrapper/AuthorizedWrapper";

const Home: FC = (): JSX.Element => {
  return (
    <AuthorizedWrapper>
      <h1>Home Page</h1>
      <div className="alertDiv"></div>
    </AuthorizedWrapper>
  );
};

export default Home;
