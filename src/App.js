import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import { login, logout, selectUser } from "./features/counter/userSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { auth } from "./Components/Firebase/firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  });

  return (
    <>
      <div className="bg-linkedingrey flex flex-col  ">
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="flex justify-center gap-x-9 ">
            <Sidebar />
            <Feed />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
