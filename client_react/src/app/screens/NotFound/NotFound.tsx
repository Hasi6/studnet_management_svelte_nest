import React, { FC } from "react";
import { Link } from "react-router-dom";

import "./NotFound.scss";

const NotFound: FC = (): JSX.Element => {
  return (
    <main className="main">
      <section className="container">
        <div className="content">
          <h1 className="section-title">404</h1>
          <h2 className="section-subtitle">Page not found</h2>
          <Link to="/">Go back to home</Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
