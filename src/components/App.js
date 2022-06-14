import video from "../data/video.js";
import Header from "./Header"
import Comments from "./Comments"

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header 
        title={video.title}
        currentViews={video.views}
        created={video.createdAt}
      />
    </div>
  );
}

export default App;
