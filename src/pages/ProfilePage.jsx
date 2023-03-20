import { useState, useEffect } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import "./ProfilePage.css";
import MasonryLayout from "./layouts/MasonryLayout";
import server from "../apis/server";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import PostCard from "../components/posts/PostCard";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { state } = useLocation();

  const queryClient = useQueryClient();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState();

  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      server.get(`/users/${state.userId}`).then((res) => {
        setUser(res.data[0]);
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: server.get(`/users/${state.userId}`).then((res) => {
      setUser(res.data[0]);
      return res.data;
    }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  useEffect(() => {
    mutation.mutate();
  }, [state.userId]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const posts = await server
        .get(`/posts/${user.id}`)
        .then((res) => res.data);
      setPosts(posts);
    };
    if (user) {
      fetchUserPosts();
    }
  }, [user]);

  console.log(data, user);
  return (
    <>
      {isLoading ? (
        "Loading profile"
      ) : (
        <>
          {user && <ProfileCard user={user} />}
          <div className="user-posts">
            <div className="posts-title">Posts</div>
            {posts && posts.length ? (
              <MasonryLayout>
                {posts.map((item, index) => {
                  return <PostCard key={index} postData={item} />;
                })}
              </MasonryLayout>
            ) : (
              "No posts yet"
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
