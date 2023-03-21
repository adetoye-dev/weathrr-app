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

  const {
    isLoading,
    error,
    data: user,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      server.get(`/users/${state.userId}`).then((res) => {
        return res.data[0];
      }),
  });

  const {
    isLoading: loadingPosts,
    error: postsError,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      server.get(`/posts/${state.userId}`).then((res) => {
        return res.data;
      }),
  });

  console.log(user);
  return (
    <>
      {isLoading ? (
        "Loading profile"
      ) : (
        <>
          {user && <ProfileCard user={user} />}
          <div className="user-posts">
            <div className="posts-title">Posts</div>
            {loadingPosts ? (
              "Loading posts"
            ) : posts && posts.length ? (
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
