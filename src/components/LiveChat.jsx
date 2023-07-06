import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generateName } from "../utils/helper";

const LiveChat = () => {
  const [userMessage, setUserMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // console.log("API Polling");
      dispatch(
        addmessage({
          name: generateName(),
          text: "Awesome🍁 Keep up the good work❤️",
        })
      );
    }, 1000);

    return () => clearInterval(i); // Garbage Collection (componentWillUnmount)
  }, []);

  return (
    <div className="border border-black w-[26rem] px-5 py-2 font-semibold rounded-xl h-[498px] dark:border-white">
      <h1 className="pb-2">Top Chat ⮛</h1>
      <div className="flex flex-col-reverse overflow-y-scroll py-2 w-[24rem] h-[418px] 2xl:w-[26rem] xl:w-96 lg:w-80 sm:w-80 xs:w-80">
        {chatMessages?.map((m, index) => (
          // DO NOT USE INDEX AS KEY. HERE WE DONT HAVE UNIQUE KEY SO WE ARE USING INDEX
          <LiveMessage key={index} name={m?.name} text={m?.text} />
        ))}
      </div>
      <form
        action=""
        className="pb-3"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addmessage({
              name: "Priyanshu Joshi",
              text: userMessage,
            })
          );
          setUserMessage("");
        }}
      >
        <input
          type="text"
          className="border-b border-b-black w-[22rem] h-7 px-2 text-sm focus:outline-none focus:border-b-[3px] focus:border-b-blue-600 dark:bg-black 2xl:w-[22rem] xl:w-80 lg:w-16 2xl:px-2 xl:px-1"
          placeholder="Say Something..."
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button className="pl-1 2xl:pl-1 xl:pl-0">➤</button>
      </form>
    </div>
  );
};

export default LiveChat;
