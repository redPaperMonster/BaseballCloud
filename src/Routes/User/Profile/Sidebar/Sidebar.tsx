import React, { useState } from "react";
import SidebarInfo from "./SidebarInfo/SidebarInfo";
import "react-toastify/dist/ReactToastify.css";
import { userSelector } from "../../../../Store";
import { useSelector } from "react-redux";
import { hasEmptyValues } from "./Utils/hasEmptyValues";
import SidebarFormContainer from "./SidebarForm/SidebarFormContainer";
interface SidebarProps {
  params?: { id: string };
}

const Sidebar: React.FC<SidebarProps> = ({ params }) => {
  const [isFormShow, setFormShow] = useState(false);
  const requiredUserData = useSelector(userSelector.getUserRequiredData());

  if (params && params.id) {
    return <SidebarInfo setFormShow={setFormShow} params={params} />;
  }

  if (hasEmptyValues(requiredUserData)) {
    return <SidebarFormContainer setFormShow={setFormShow} />;
  }

  return isFormShow ? (
    <SidebarFormContainer setFormShow={setFormShow} />
  ) : (
    <SidebarInfo setFormShow={setFormShow} params={params} />
  );
};

export default Sidebar;
