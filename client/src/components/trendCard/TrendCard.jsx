import "./TrendCard.css";

import { TrendsData } from "../../data/trendsData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendsData.map((trend, index) => (
        <div className="trend" key={index}>
          <span>#{trend.name}</span>
          <span>{trend.shares}k shares</span>
        </div>
      ))}
    </div>
  );
};

export default TrendCard;
