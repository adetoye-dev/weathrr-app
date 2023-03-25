import Posts from "../components/posts/Posts";
import { useQuery } from "@tanstack/react-query";
import server from "../apis/server";

const BookmarkPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["bookmarks"],
    queryFn: async () => {
      return server.get("/bookmarks/user").then((res) => res.data);
    },
  });

  return <Posts isLoading={isLoading} error={error} data={data} />;
};

export default BookmarkPage;
