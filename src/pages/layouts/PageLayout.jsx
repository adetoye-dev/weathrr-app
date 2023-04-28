import PrimaryNav from "../../components/navigations/PrimaryNav";
import MobileNav from "../../components/navigations/MobileNav";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AddPost from "../../components/posts/addPost";
import Alert from "../../components/alerts/Alert";

const PageLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Alert />
      <PrimaryNav />
      <main className="container content-container">
        <AddPost />
        <Outlet />
      </main>
      <MobileNav />
    </QueryClientProvider>
  );
};

export default PageLayout;
