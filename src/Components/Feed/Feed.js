import { BsPencilSquare } from "react-icons/bs";
import { MdPhoto } from "react-icons/md";
import { RiVideoFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import FeedItemIcons from "./FeedItemIcons";
import Post from "./Post";
import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase";
import firebase from "firebase";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Dan James",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <>
      <div className="flex-grow-0.6   ">
        <div className=" bg-white w-w-140 py-4 rounded-lg flex flex-col   ">
          <div className="group cursor-pointer">
            <div className="w-11/12 border rounded-full flex items-center py-3 ml-4 group-hover:bg-gray-100 transition delay-50   ">
              <BsPencilSquare className="text-gray-500 mx-1 cursor-pointer" />
              <form className="flex width-full   ">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  type="text"
                  placeholder="Start a Post"
                  className="border-none flex-grow ml-2 pr-48 outline-none font-medium text cursor-pointer group-hover:bg-gray-100 transition delay-50   "
                />
                <button onClick={sendPost} className="hidden" type="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="flex-row flex  justify-around">
            <FeedItemIcons title="Photo" Icon={MdPhoto} color="#70B5F9" />
            <FeedItemIcons title="Video" Icon={RiVideoFill} color="#7FC15E" />
            <FeedItemIcons
              title="Event"
              Icon={FaRegCalendarCheck}
              color="#E7A33E"
            />
            <FeedItemIcons
              title="Write Article"
              Icon={RiArticleLine}
              color="#F5987E"
            />
          </div>
        </div>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </div>
    </>
  );
}

export default Feed;
