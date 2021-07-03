import { useEffect, useState } from "react";
import "./Ournews.css";

export default function NewsAdd() {
    const [specialNews, setSpecialNews] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [saved, setSaved] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [status, setStatus] = useState();

    //console.log(specialNews, email, message);

    const sendMessage = () => {
        myLoading();
        //let name = document.getElementById("name").value;
        //let email = document.getElementById("email").value;
        //let message = document.getElementById("message").value;
        //console.log(specialNews, email, message);

        if ((specialNews === undefined || email === undefined || message === undefined ) ||
           (specialNews === "" || email === "" || message === ""))
         {

            //console.log('empty...'+ specialNews)
            setStatus("please fill out All information to proceed !")

        } else {

            setStatus()

            //console.log('empty...'+ specialNews)

            fetch(
                "https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/luisform-uesae/service/luisForm/incoming_webhook/post?secret=luish",

                {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ specialNews, email, message })
                }
            )
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                })
                .catch((err) => console.log(err));

            setSaved((p) => !p);

        }







    };

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
            <h1>Publish your Own News !!</h1>
            {status}
            <div className="superContainer">
                {!saved && (
                    <form className="">
                        <div className="">
                            <div className="">
                                <label className="" for="name">
                                    News Title
                                </label>
                            </div>

                            <div className="">
                                <input
                                    required
                                    id="name"
                                    type="text"
                                    placeholder="Add News Title here"
                                    onChange={(e) => setSpecialNews(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <label className="" for="email">
                                    Author
                                </label>
                            </div>
                            <div className="">
                                <input
                                    required
                                    id="email"
                                    type="text"
                                    placeholder="Add Author here"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <label className="" for="message">
                                    News Link
                                </label>
                            </div>
                            <div className="">
                                <input
                                    required
                                    id="email"
                                    type="text"
                                    placeholder="Link to your news here"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className=""></div>
                            <div className="publishButton">
                                <button className="" type="button" onClick={sendMessage}>
                                    Publish
                                </button>
                            </div>
                        </div>
                    </form>
                )}
                {showLoader && <div id="loader"></div>}
                {saved && !showLoader && (
                    <div>
                        Your News have been saved in the DB ! .... Thank you for your
                        contribution ! Keep posting !
                    </div>
                )}
            </div>
        </>
    );
}

