import { useEffect, useState } from "react";
export default function NewsAdd() {

    const [specialNews, setSpecialNews] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    console.log(specialNews, email, message);


    const sendMessage = () => {
        
        //let name = document.getElementById("name").value;
        //let email = document.getElementById("email").value;
        //let message = document.getElementById("message").value;
        console.log(specialNews, email, message);
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
      };

    return (
        <>
            <h1>Publish your Own New !!</h1>

            <form className="">

                <div className="">
                    <div className="">

                        <label
                            className=""
                            for="name"
                        >
                            News Title
                        </label>
                    </div>

                    <div className="">
                    <input id="name" type="text" placeholder="Add News Title here"  onChange={(e) => setSpecialNews(e.target.value)} />   
                    </div>

                    

                </div>

                <div className="">
                    <div className="">
                        <label
                            className=""
                            for="email"
                        >
                            Author
                        </label>
                    </div>
                    <div className="">
                    <input id="email" type="text" placeholder="Add Author here"  onChange={(e) => setEmail(e.target.value)} />
                        
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <label
                            className=""
                            for="message"
                        >
                            News Link
                        </label>
                    </div>
                    <div className="">
                    <input id="email" type="text" placeholder="Link to your news here"  onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>
                <div className="">
                    <div className=""></div>
                    <div className="">
                        <button
                            className=""
                            type="button"
                            onClick={sendMessage}
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </form>



        </>


    )

}

/* <input
className=""
id="name"
type="text"
placeholder="Add News Title here"
/>

<input
                            className=""
                            id="email"
                            type="text"
                            placeholder="Add Author here"
                        />


<textarea
                            className=""
                            id="message"
                            type="text"
                            placeholder="Link to your news here"
                        ></textarea>


*/