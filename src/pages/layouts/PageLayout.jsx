import PrimaryNav from "../../components/navigations/PrimaryNav";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PageLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PrimaryNav />
      <main className="container content-container">
        <Outlet />
      </main>
    </QueryClientProvider>
  );
};

export default PageLayout;
