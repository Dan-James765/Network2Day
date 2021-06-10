import { auth } from "../Firebase/firebase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/counter/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-16">
        <img
          src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/12/linkedin.png?w=780&h=408&crop=1"
          className="flex max-h-24 "
          alt=""
        />
        <div className="pt-4 ">
          <form className="flex-col flex gap-y-3 w-80 placeholder-p-2 pb-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="focus:outline-none hover:bg-gray-100 transition delay-85 py-2 rounded-lg border-gray-400 border cursor-pointer "
            />
            <input
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              type="text"
              placeholder="Profile Photo URL"
              className="focus:outline-none hover:bg-gray-100 transition delay-85 py-2 rounded-lg border-gray-400 border cursor-pointer"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              className="focus:outline-none hover:bg-gray-100 transition delay-85 py-2 rounded-lg border-gray-400 border cursor-pointer"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="focus:outline-none hover:bg-gray-100 transition delay-85 py-2 rounded-lg border-gray-400 border cursor-pointer"
            />
            <button
              onClick={loginToApp}
              className="text-white bg-blue-800 py-2 transition delay-85 rounded-lg border-gray-400 border hover:bg-blue-900 focus:outline-none"
            >
              Sign In
            </button>
            <h1 className="flex justify-center">
              Not a member?{" "}
              <span
                className="px-1 text-linkedinblue cursor-pointer hover:text-blue-400 transition delay-85"
                onClick={register}
              >
                Register Now
              </span>
            </h1>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
