import PrimaryNav from "./navigations/PrimaryNav";
import SecondaryNav from "./navigations/SecondaryNav";
import { Outlet } from "react-router-dom";

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
