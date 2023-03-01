import PrimaryNav from "../../components/navigations/PrimaryNav";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <>
      <PrimaryNav />
      <main className="container content-container">
        <Outlet />
      </main>
    </>
  );
};

export default PageLayout;
