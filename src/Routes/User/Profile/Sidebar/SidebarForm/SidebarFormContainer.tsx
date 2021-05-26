import { useMutation, useQuery } from "@apollo/client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoaderWrapper, ToastBody } from "../../../../../Components";
import { userActions, UserDataType, userSelector } from "../../../../../Store";
import { mutations, queries } from "../../Schemas";

import fetchService from "../../../../../APIService/fetchService";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import SidebarForm from "./SidebarForm";
import {
  FacilityDataType,
  SchoolDataType,
  TeamDataType,
} from "../../../../../Store/UserSlice/types";
import {
  handsOptions,
  positionOptions,
  schoolYearsOptions,
} from "../../../../../Utils/options";

interface SidebarFormProps {
  setFormShow: () => void;
}

export interface SidebarFormStyleProps {
  url: string;
}

const SidebarFormContainer: React.FC<SidebarFormProps> = ({ setFormShow }) => {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<string>();
  const [userData, setUserData] = useState<UserDataType>();
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  let { loading, data } = useQuery(queries.getCurrentProfile, {});
  const profile = useSelector(userSelector.getUserData());
  const [updateUser] = useMutation(mutations.updateUser);
  const schools = useQuery(queries.getSchools, {
    variables: { search: "" },
  });
  const teams = useQuery(queries.getTeams, {
    variables: { search: "" },
  });
  const facilities = useQuery(queries.getFacilities, {
    variables: { search: "" },
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (!loading) {
      if (profile) {
        const { token, recent_events, _persist, ...newProfile } = profile;
        setUserData(newProfile);
      } else {
        setUserData(data.current_profile);
      }
    }
  }, [data, profile]);

  if (schools.loading || teams.loading || facilities.loading || loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
      </LoaderWrapper>
    );
  }

  const schoolOptions = schools.data.schools.schools.map(
    (i: SchoolDataType) => {
      return { value: i, label: i.name };
    }
  );
  const teamsOptions = teams.data.teams.teams.map((i: TeamDataType) => {
    return { value: i.name, label: i.name, payload: i };
  });
  const facilitiesOptions = facilities.data.facilities.facilities.map(
    (i: FacilityDataType) => {
      return { value: i.u_name, label: i.u_name, payload: i };
    }
  );

  const handleSubmit = async (values: UserDataType) => {
    setIsUpdating(true);
    await updateUser({
      variables: {
        form: {
          ...values,
          avatar: url || values.avatar,
          biography: values.biography || " ",
        },
      },
    }).then((res) => {
      toast.success(() => (
        <ToastBody text="Profile has been updated successfully!" />
      ));
      dispatch(userActions.setData(res.data.update_profile.profile));
      setFormShow();
    });
    setIsUpdating(false);
  };

  const handleUpload = async () => {
    setIsImageUpload(true);
    const res = await fetchService
      .uploadPhoto(file, { name: file?.name })
      .then((res) => {
        setFile(undefined);
        return res;
      });
    setUrl(res.config.url.split("?")[0]);
    setIsImageUpload(false);
  };
  const handleCancel = async () => {
    setFile(undefined);
    setUrl("");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    setFile(file);
  };
  if (!userData) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
      </LoaderWrapper>
    );
  }
  return (
    <SidebarForm
      setFormShow={setFormShow}
      handleSubmit={handleSubmit}
      userData={userData}
      url={url}
      data={data.current_profile}
      file={file}
      isImageUpload={isImageUpload}
      handleUpload={handleUpload}
      handleChange={handleChange}
      handleCancel={handleCancel}
      positionOptions={positionOptions}
      handsOptions={handsOptions}
      schoolOptions={schoolOptions}
      isUpdating={isUpdating}
      schoolYearsOptions={schoolYearsOptions}
      teamsOptions={teamsOptions}
      facilitiesOptions={facilitiesOptions}
    />
  );
};

export default SidebarFormContainer;
