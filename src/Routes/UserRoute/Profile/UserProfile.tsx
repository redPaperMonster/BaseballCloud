import { useQuery } from "@apollo/client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import schemas from "../../../APIService/Schemas";
import { userActions, userSelector } from "../../../Store";

function UserProfile() {
  const { loading, error, data } = useQuery(schemas.currentProfile);

  const dispatch = useDispatch();
  const token = useSelector(userSelector.getToken());
  const handleLogOut = () => {
    localStorage.clear();
    dispatch(userActions.setToken(""));
  };
  return (
    <div>
      <h1>USER PROPFILE HEHE</h1>
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
}

export default UserProfile;
