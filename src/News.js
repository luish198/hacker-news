import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function News({search}) {

    const { location } = useParams();

    const [newsStories, setNewsStories] = useState([]);

    useEffect(() => {
        fetch("https://hn.algolia.com/api/v1/search?query="+search)
            .then((res) => res.json())
            .then((res) => setNewsStories(res.hits));
    }, []);

    return (
        <>
            <h1>news here....{location} hacker news ...{search}</h1>
            {newsStories.map((story) => (
                <ul>
                    <li>{story.title}</li>
                    <li>{story.author}</li>
                    <li>{story.url}</li>

                </ul>
                
                
            ))}


        </>

    )


}