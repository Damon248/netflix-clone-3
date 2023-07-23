import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profieScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <button
                onClick={() => {
                  auth.signOut().then(() => {
                    console.log("User signed out successfully!");
                  });
                }}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
