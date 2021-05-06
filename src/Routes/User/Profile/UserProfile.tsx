import { useQuery } from "@apollo/client";
import { AxiosResponse } from "axios";
import { fetchAPI } from "../../../APIService";
import { useDispatch, useSelector } from "react-redux";
import { queries } from "./Schemas/index";
import { userActions, userSelector } from "../../../Store";

function UserProfile() {
  const { loading, error, data } = useQuery(queries.currentProfile);

  const dispatch = useDispatch();
  const token = useSelector(userSelector.getToken());

  const handleLogOut = async () => {
    const res: AxiosResponse = await fetchAPI.logOut();
    if (res.data.success) {
      localStorage.clear();
      dispatch(userActions.setToken(""));
    }
  };
  return (
    <div>
      <h1>USER PROPFILE HEHE</h1>
      <button onClick={handleLogOut}>log out</button>
    </div>
  );
}

export default UserProfile;
