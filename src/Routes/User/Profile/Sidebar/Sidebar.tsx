import React, { useState } from "react";
import SidebarInfo from "./SidebarInfo/SidebarInfo";
import "react-toastify/dist/ReactToastify.css";
import { userSelector } from "../../../../Store";
import { useSelector } from "react-redux";
import { hasEmptyValues } from "./Utils/hasEmptyValues";
import _ from "lodash";
import SidebarFormContainer from "./SidebarForm/SidebarFormContainer";
interface SidebarProps {
  params?: { id: string };
}

const Sidebar: React.FC<SidebarProps> = ({ params }) => {
  const [isFormShow, setFormShow] = useState(false);
  const requiredUserData = useSelector(userSelector.getUserRequiredData());
  const token = useSelector(userSelector.getToken());

  const handleShowForm = () => {
    setFormShow(!isFormShow);
  };
  if (params && params.id) {
    return (
      <SidebarInfo
        setFormShow={() => setFormShow(!isFormShow)}
        params={params}
      />
    );
  }

  if (hasEmptyValues(requiredUserData)) {
    return <SidebarFormContainer setFormShow={handleShowForm} />;
  }
  if (token) {
    return isFormShow ? (
      <SidebarFormContainer setFormShow={handleShowForm} />
    ) : (
      <div>
        <SidebarInfo
          setFormShow={handleShowForm}
          isPlayerProfile
          params={params}
        />
      </div>
    );
  }
  return null;
};

export default Sidebar;
