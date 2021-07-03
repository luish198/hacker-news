import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Ournews.css";

export default function News({ search }) {
  const { location } = useParams();

  const [newsStoriesLuis, setNewsStoriesLuis] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    myLoading();
    fetch(
      //"https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/luishackernews-fmzgq/service/luis-hacker-news/incoming_webhook/get?secret=luish"
      "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/luisform-uesae/service/luisForm/incoming_webhook/get?secret=luish"
    )
      .then((res) => res.json())
      .then((res) => setNewsStoriesLuis(res))
      .catch((err) => console.log(err));
  }, []);

  //loader function here...

  let luisloading = () => {
    setShowLoader((p) => !p);
  };

  function myLoading() {
    setTimeout(luisloading, 1000);
    setShowLoader((p) => !p);
  }

  //end loader function

  return (
    <>
      {showLoader && <div id="loader"></div>}
      <h1>
        Our news aqui !....{location} About ...{search}
      </h1>
      {!showLoader && (
        <div>
          {newsStoriesLuis.map((story) => (
            <ul>
              <li key={story.id}>{story.specialNews}</li>
              <li key={story.id}>{story.email}</li>
              <li key={story.id}>{story.message}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
}

//<button onClick={myLoading}>show loader</button>
