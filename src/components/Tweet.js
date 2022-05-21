import Actions from "./Actions";
import Message from "./Message";
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import { FaEllipsisH } from "react-icons/fa";

function Tweet(props) {
  const { user: { image }, user: { name }, user: { handle }, timestamp, message } = props.tweet;
  return (
    <div className="tweet">
      <div className="tweet-content">
        <ProfileImage image={image} />
        <div className="tweet-info">
          <div className="tweet-header">
            <User name={name} handle={handle} />
            <Timestamp timestamp={timestamp} />
            <FaEllipsisH className="tweet-ellipsis" />
          </div>
          <Message message={message} />
          <Actions />
        </div>
      </div>
    </div>
  );
};
export default Tweet;
