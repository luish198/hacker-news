import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./news.css";
import "./Ournews.css";

export default function News({ search }) {
    const { location } = useParams();

    const [newsStories, setNewsStories] = useState([]);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        myLoading();
        fetch("https://hn.algolia.com/api/v1/search?query=" + search)
            .then((res) => res.json())
            .then((res) => setNewsStories(res.hits));
    }, []);

    //loading function here...

    let luisloading = () => {
        setShowLoader((p) => !p);
    };

    function myLoading() {
        setTimeout(luisloading, 1000);
        setShowLoader((p) => !p);
    }

    //end loading function

    return (
        <>
            {showLoader && <div id="loader"></div>}
            <h1>
                news here....{location} hacker news ...{search}
            </h1>
            {(newsStories.length===0)&& <h1>No News is Good News !!</h1>}

            {!showLoader && (
                <div className="newsContainer">
                    {newsStories.map((story) => (
                        <ul>
                            <li key={story.id}>Title: {story.title}</li>
                            <li key={story.id}>Autor: {story.author}</li>
                            <li key={story.id}>
                                <a href={story.url} rel="noreferrer" target="_blank">Read More...</a>
                            </li>
                        </ul>
                    ))}
                </div>
            )}
        </>
    );
}
