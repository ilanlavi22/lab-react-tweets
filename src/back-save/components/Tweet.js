import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import { FaEllipsisH } from "react-icons/fa";

function Tweet(props) {
  const tweet = props;
  return (
    <div className="tweet">
      <div className="tweet-content">
        <ProfileImage image={tweet.image} />
        <div className="tweet-info">
          <div className="tweet-header">
            <User name={tweet.name} handle={tweet.handle} />
            <Timestamp timestamp={tweet.timestamp} />
            <FaEllipsisH className="tweet-ellipsis" />
          </div>
          <Message message={tweet.message} />
          <Actions />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
