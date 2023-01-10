import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import { Outlet } from "react-router-dom";

import "./Main.css";

const Layout = () => {
  return (
    <>
      <PrimaryNav />
      <main className="content-container">
        <Outlet />
      </main>
      <SecondaryNav />
    </>
  );
};

export default Layout;
