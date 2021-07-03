import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function News({ search }) {

    const { location } = useParams();

    const [newsStoriesLuis, setNewsStoriesLuis] = useState([]);

    useEffect(() => {
        fetch(
            //"https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/luishackernews-fmzgq/service/luis-hacker-news/incoming_webhook/get?secret=luish"
            "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/luisform-uesae/service/luisForm/incoming_webhook/get?secret=luish"
        )
            .then((res) => res.json())
            .then((res) => setNewsStoriesLuis(res))
            .catch((err) => console.log(err));
    }, []);



    return (
        <>
            <h1 >LUIS news aqui !....{location} About ...{search}</h1>
            {newsStoriesLuis.map((story) => (
                <ul>
                    <li>{story.specialNews}</li>
                    <li>{story.email}</li>
                    <li>{story.message}</li>
                </ul>

            



            ))}

        </>

    )


}