import React, { useState } from "react";
import SidebarForm from "./SidebarForm/SidebarForm";
import SidebarInfo from "./SidebarInfo/SidebarInfo";
import "react-toastify/dist/ReactToastify.css";
import { StyledToast } from "../../../../Components";
import { userSelector } from "../../../../Store";
import { useSelector } from "react-redux";
import { hasEmptyValues } from "./Utils/hasEmptyValues";
import _ from "lodash";
interface SidebarProps {
  params?: any;
}

const Sidebar: React.FC<SidebarProps> = ({ params }) => {
  const [isFormShow, setFormShow] = useState(false);
  const requiredUserData = useSelector(userSelector.getUserRequiredData());

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
    return <SidebarForm setFormShow={handleShowForm} />;
  }
  return isFormShow ? (
    <SidebarForm setFormShow={handleShowForm} />
  ) : (
    <div>
      <SidebarInfo
        setFormShow={handleShowForm}
        isPlayerProfile
        params={params}
      />
    </div>
  );
};

export default Sidebar;
