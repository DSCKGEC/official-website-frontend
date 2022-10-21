import React, { createContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.scss";

export const ContentMovedContext = createContext<any>([] as any);

const Layout: React.FC = () => {
  const [contentMoved, setContentMoved] = useState<boolean>(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
            <Footer />
          </div>
        </ContentMovedContext.Provider>
      </div>
    </>
  );
};

export default Layout;
