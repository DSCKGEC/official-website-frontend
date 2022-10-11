import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.scss";

export const ContentMovedContext = createContext<any>([] as any);

const Layout: React.FC = () => {
  const [contentMoved, setContentMoved] = useState<boolean>(false);
  return (
    <>
      <div className="layout-container">
        <ContentMovedContext.Provider value={[contentMoved, setContentMoved]}>
          <Sidebar
            contentMoved={contentMoved}
            setContentMoved={(moved: boolean) => setContentMoved(moved)}
          />
          <div className={!contentMoved ? "contents moved" : "contents"}>
            <Outlet />
          </div>
        </ContentMovedContext.Provider>
      </div>
    </>
  );
};

export default Layout;
