import "./ProfileCard.css";
import { useUserData } from "../../contexts/AuthContext";
import server from "../../apis/server";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ProfileCard = ({ user }) => {
  const { currentUser } = useUserData();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["relationships", user.id],
    queryFn: () =>
      server.get("/relationships?userId=" + user.id).then((res) => res.data),
  });

  const {
    isLoading: followingLoading,
    error: err,
    data: followingData,
  } = useQuery({
    queryKey: ["following", user.id],
    queryFn: () =>
      server
        .get("/relationships/following?userId=" + user.id)
        .then((res) => res.data),
  });

  console.log(data, followingData);

  return (
    <>
      <div className="profile-card">
        <div className="profile-image">
          <img src={user.profilePic} alt="profile-img" />
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <div className="profile-data">
          <div className="post-location-info">
            <span className="icon">
              <img src="/icons/location-icon.png" alt="location-icon" />
            </span>
            <span className="post-location">{user.city}</span>
          </div>
        </div>
        <div className="about-user">
          nsectetur adipiscing elit, sed do eiusmod tempor incididunt u
        </div>
        <div className="follow-metrics">
          {isLoading ? (
            "loading followers"
          ) : (
            <span className="follower-count">
              {data ? data.length : 0} followers
            </span>
          )}
          {followingLoading ? (
            "loading followings"
          ) : (
            <span className="following-count">
              {followingData ? followingData.length : 0} following
            </span>
          )}
        </div>
        {user.id === currentUser.id ? (
          <button className="follow-user-btn">Update Profile</button>
        ) : (
          <button className="follow-user-btn">
            {data && data.includes(currentUser.id) ? "following" : "follow"}
          </button>
        )}
      </div>
    </>
  );
};

export default ProfileCard;
