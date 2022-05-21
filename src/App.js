import "./index.scss";
import Tweet from "./components/Tweet";
import data from "./data";

function App() {
  const tweetsArray = data;

  return (
    <div className="container">
      {tweetsArray.map((tweet) => {
        return (
          /* {<Tweet key={tweet.id} tweet={tweet} />} */
          /* using the spread operator */
          <Tweet key={tweet.id} {...tweet} />
        );
      })}
    </div>
  );
}

export default App;
