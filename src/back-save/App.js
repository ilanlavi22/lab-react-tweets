import "./index.scss";
import Tweet from "./components/Tweet";
import data from "./data";

function App() {
  const tweetsArray = data;

  return (
    <div className="container">
      {tweetsArray.map((tweet) => {
        const { id, user: { name }, user: { image }, message, user: { handle }, timestamp } = tweet;
        return (
          <Tweet
            key={id}
            name={name}
            image={image}
            message={message}
            handle={handle}
            timestamp={timestamp}
          />
        );
      })}
    </div>
  );
}

export default App;