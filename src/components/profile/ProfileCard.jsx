import "./ProfileCard.css";
import { useAuthContext } from "../../contexts/AuthContext";
import server from "../../apis/server";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useUpdateProfile } from "../../contexts/UpdateProfileContext";
import UpdateProfile from "./UpdateProfile";

const ProfileCard = ({ user }) => {
  const { currentUser } = useAuthContext();

  const { handleClickOpen } = useUpdateProfile();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["followers", user.userId],
    queryFn: () =>
      server
        .get("/relationships?userId=" + user.userId)
        .then((res) => res.data),
  });

  const {
    isLoading: followingLoading,
    error: err,
    data: followingData,
  } = useQuery({
    queryKey: ["following", user.userId],
    queryFn: () =>
      server
        .get("/relationships/following?userId=" + user.userId)
        .then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (followed) => {
      if (followed)
        return server.delete("/relationships?userId=" + user.userId);
      return server.post("/relationships", { userId: user.userId });
    },
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["followers"] });
    },
  });

  const handleFollow = (e) => {
    e.preventDefault();
    mutation.mutate(data.includes(currentUser.userId));
  };

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
        <div className="about-user">{user.about}</div>
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
        {user.userId === currentUser.userId ? (
          <button className="follow-user-btn" onClick={handleClickOpen}>
            Update Profile
          </button>
        ) : (
          <button className="follow-user-btn" onClick={handleFollow}>
            {data && data.includes(currentUser.userId) ? "following" : "follow"}
          </button>
        )}
      </div>
      <UpdateProfile />
    </>
  );
};

export default ProfileCard;
