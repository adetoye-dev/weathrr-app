import { useEffect } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import "./ProfilePage.css";
import Posts from "../components/posts/Posts";
import server from "../apis/server";
import { useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const ProfilePage = () => {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.split("/")[2]);

  const userMutation = useMutation({
    mutationFn: () =>
      server.get(`/users/${userId}`).then((res) => {
        return res.data[0];
      }),
  });

  useEffect(() => {
    userMutation.mutate();
  }, [userId]);

  return (
    <>
      {userMutation.isLoading ? (
        "Loading profile"
      ) : userMutation.isError ? (
        <p>Unable to fetch user, Kindly check your connection and retry!</p>
      ) : (
        <>
          {userMutation.data && <ProfileCard user={userMutation.data} />}
          <div className="user-posts">
            <div className="posts-title">Posts</div>
            <Posts userId={userId} />
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
