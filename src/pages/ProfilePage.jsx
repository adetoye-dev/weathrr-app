import { useEffect, useState } from "react";
import ProfileCard from "../components/profile/ProfileCard";
import "./ProfilePage.css";
import Posts from "../components/posts/Posts";
import server from "../apis/server";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { state } = useLocation();
  const { currentUser } = useAuthContext();
  const [profileData, setProfileData] = useState(null);
  const [fetchingProfile, setFetchingProfile] = useState(false);
  const [profileFetchError, setProfileFetchError] = useState(false);
  const userId = state.userId;

  const { isLoading, error, data } = useQuery({
    queryKey: ["myPosts"],
    queryFn: async () => {
      return server.get(`/posts/${userId}`).then((res) => res.data);
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await server.get(`/users/${userId}`);

        setProfileData(data);
        console.log(data);
        setFetchingProfile(false);
      } catch (err) {
        setProfileFetchError(true);
        setFetchingProfile(false);
      }
    };
    //check if it's the logged in user's profile or not before fetching
    if (userId === currentUser.userId) {
      setProfileData(currentUser);
      console.log("I ran");
    } else {
      setFetchingProfile(true);
      fetchUser();
      console.log("fetch ran too");
    }
  }, [userId]);

  return (
    <>
      {fetchingProfile ? (
        "Loading profile"
      ) : profileFetchError ? (
        <p>Unable to fetch user, Kindly check your connection and retry!</p>
      ) : (
        <>
          {profileData && <ProfileCard user={profileData} />}
          <div className="user-posts">
            <div className="posts-title">Posts</div>
            <Posts isLoading={isLoading} error={error} data={data} />
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePage;
