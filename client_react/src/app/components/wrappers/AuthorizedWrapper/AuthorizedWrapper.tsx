import React, { FC, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { TabMenu } from "primereact/tabmenu";

const AuthorizedWrapper: FC = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [activeItem, setActiveItem] = useState({
    label: "Home",
    icon: "pi pi-fw pi-home"
  });
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Calendar", icon: "pi pi-fw pi-calendar" },
    { label: "Edit", icon: "pi pi-fw pi-pencil" },
    { label: "Documentation", icon: "pi pi-fw pi-file" },
    { label: "Settings", icon: "pi pi-fw pi-cog" }
  ];

  console.log(activeItem);

  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(!visible)}>
        Content
      </Sidebar>
      <Button icon="pi pi-arrow-right" onClick={e => setVisible(!visible)} />
      <TabMenu
        model={items}
        activeItem={activeItem}
        onTabChange={e => setActiveItem(e.value)}
      />
      {children}
    </>
  );
};

export default AuthorizedWrapper;
