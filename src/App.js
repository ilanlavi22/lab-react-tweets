import "./index.scss";
import Tweet from "./components/Tweet";
import data from "./data";

function App() {
  const tweetsArray = data;

  return (
    <div className="container">
      {tweetsArray.map((tweet) => {
        return (
          <Tweet
            key={tweet.id}
            name={tweet.user.name}
            image={tweet.user.image}
            message={tweet.message}
            handle={tweet.user.handle}
            timestamp={tweet.timestamp}
          />
        );
      })}
    </div>
  );
}

export default App;
