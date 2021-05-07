import { useQuery } from "@apollo/client";

import { queries } from "./Schemas/index";

function UserProfile() {
  const { loading, error, data } = useQuery(queries.currentProfile);
  if (loading) {
    return <h1>LOADING....</h1>;
  }

  return (
    <div>
      <h1>USER PROPFILE HEHE</h1>
    </div>
  );
}

export default UserProfile;
