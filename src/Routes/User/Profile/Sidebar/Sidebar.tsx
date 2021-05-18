import React, { useState } from "react";
import SidebarForm from "./SidebarForm/SidebarForm";
import SidebarInfo from "./SidebarInfo/SidebarInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledToast } from "../../../../Components";
interface SidebarProps {
  params?: any;
}

const Sidebar: React.FC<SidebarProps> = ({ params }) => {
  const [isFormShow, setFormShow] = useState(false);
  const handleShowForm = () => {
    toast("Success!");
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
  return isFormShow ? (
    <SidebarForm setFormShow={handleShowForm} />
  ) : (
    <div>
      <SidebarInfo
        setFormShow={handleShowForm}
        isPlayerProfile
        params={params}
      />
      <StyledToast />
    </div>
  );
};

export default Sidebar;
