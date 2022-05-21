import "./index.scss";
import Tweet from "./components/Tweet";
import data from "./data";

function App() {
  const tweetsArray = data;

  return (
    <div className="container">
      {tweetsArray.map((tweet) => {
        return (
          <Tweet tweet={tweet} key={tweet.id} />
        );
      })}
    </div>
  );
}

export default App;
