import { Followers } from "../../data/followersData";

import "./FollowersCard.css";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {Followers.map((follower, id) => (
        <div className="follower" key={id}>
          <div>
            <div className="followerImage avatar">
              <img src={follower.img} alt="" />
            </div>
            <div className="name">
              <span>{follower.name}</span>
              <span>{follower.username}</span>
            </div>
          </div>
          <button className="button fc-button">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
