import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <div className="avatar">
          <img src={Profile} alt="" />
        </div>
      </div>

      <div className="ProfileName">
        <span>Noir Lee</span>
        <span>BackEnd Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>1</span>
            <span>Followings</span>
          </div>
          <div className="vl" />
          <div className="follow">
            <span>1,208</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
