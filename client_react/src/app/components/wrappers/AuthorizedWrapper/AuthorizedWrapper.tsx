import React, { FC, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

const AuthorizedWrapper: FC = ({ children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(!visible)}>
        Content
      </Sidebar>
      <Button icon="pi pi-arrow-right" onClick={e => setVisible(!visible)} />
      {children}
    </>
  );
};

export default AuthorizedWrapper;
