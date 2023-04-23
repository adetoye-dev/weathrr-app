import Loader from "../../components/loader/Loader";
import server from "../../apis/server";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
const serverBaseUrl = import.meta.env.VITE_SERVER_API_URL;

const Logout = () => {
  const { currentUser } = useAuthContext();

  useEffect(() => {
    if (currentUser.channel === "google") {
      window.open(serverBaseUrl + "/auth/google/logout", "_self");
    } else {
      window.open(serverBaseUrl + "/auth/logout", "_self");
    }
  }, []);

  return <Loader loaderText="Logging Out..." />;
};

export default Logout;
