import React from "react";
import { useSelector } from "react-redux";
import { userSlice } from "../feautre/User";

function Profile() {
    const user = useSelector((sate)=> sate.user.value)
    console.log("user",user)
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.name} </p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}



export default Profile;
