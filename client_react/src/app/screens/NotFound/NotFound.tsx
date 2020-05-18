import React, { FC } from "react";

import "./NotFound.scss";

const NotFound: FC = (): JSX.Element => {
  return (
    <main className="main">
      <section className="container">
        <div className="content">
          <h1 className="section-title">404</h1>
          <h2 className="section-subtitle">Page not found</h2>
          <a href="#" className="btn">
            Go back to home
          </a>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
