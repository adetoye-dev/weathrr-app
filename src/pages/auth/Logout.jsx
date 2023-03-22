import Loader from "../../components/loader/Loader";
import server from "../../apis/server";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["logout"],
    queryFn: () => server.post("/auth/logout").then((res) => res.data),
  });

  return (
    <>
      {isLoading ? (
        <Loader loaderText="Logging Out..." />
      ) : error ? (
        <div dangerouslySetInnerHTML={{ __html: error.response.data }} />
      ) : (
        data && <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default Logout;
