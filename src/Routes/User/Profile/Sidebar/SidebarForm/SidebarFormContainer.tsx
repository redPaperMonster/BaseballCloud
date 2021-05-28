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
import _ from "lodash";
import { filterData, setValuesToRequestData } from "../Utils/setDefaultOptions";

interface SidebarFormProps {
  setFormShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SidebarFormStyleProps {
  url: string;
}

const SidebarFormContainer: React.FC<SidebarFormProps> = ({ setFormShow }) => {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<string>();
  const [preview, setPreview] = useState<string | ArrayBuffer | null>();
  const [userData, setUserData] = useState<UserDataType>();
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);
  const userId = useSelector(userSelector.getUserId());
  let { loading, data } = useQuery(queries.getCurrentProfile, {});
  const [updateUser, { loading: updateLoading }] = useMutation(
    mutations.updateUser
  );
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
    if (data?.current_profile) {
      setUserData(data?.current_profile);
    }
  }, [data]);

  if (schools.loading || teams.loading || facilities.loading || loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
      </LoaderWrapper>
    );
  }

  const schoolOptions = schools.data.schools.schools.map(
    (i: SchoolDataType) => {
      return { value: i.id, label: i.name };
    }
  );
  const teamsOptions = teams.data.teams.teams.map((i: TeamDataType) => {
    return { value: i.id, label: i.name };
  });
  const facilitiesOptions = facilities.data.facilities.facilities.map(
    (i: FacilityDataType) => {
      return { value: i.id, label: i.u_name };
    }
  );

  const handleSubmit = async (values: UserDataType) => {
    let filteredSchool = [];
    const filteredTeams = filterData(teams.data.teams.teams, values.teams);
    const filteredFacilities = filterData(
      facilities.data.facilities.facilities,
      values.facilities
    );
    if (values.school) {
      filteredSchool = schools.data.schools.schools.filter(
        (i: SchoolDataType) => i.id === (values as any).school
      );
    }
    await updateUser({
      variables: {
        form: {
          id: userId,
          ...setValuesToRequestData(values),
          avatar: url || "",
          teams: [...filteredTeams],
          facilities: [...filteredFacilities],
          school: filteredSchool.find(() => true),
        },
      },
    }).then((res) => {
      toast.success(() => (
        <ToastBody text="Profile has been updated successfully!" />
      ));
      dispatch(userActions.setData(res.data.update_profile.profile));
      setFormShow(false);
    });
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
    setPreview("");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }
    const file = input.files[0];
    setFile(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setPreview(reader.result);
    };
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
      handleSubmit={handleSubmit}
      userData={userData}
      preview={preview}
      data={data.current_profile}
      file={file}
      isImageUpload={isImageUpload}
      handleUpload={handleUpload}
      handleChange={handleChange}
      handleCancel={handleCancel}
      setFormShow={setFormShow}
      positionOptions={positionOptions}
      handsOptions={handsOptions}
      schoolOptions={schoolOptions}
      isUpdating={updateLoading}
      schoolYearsOptions={schoolYearsOptions}
      teamsOptions={teamsOptions}
      facilitiesOptions={facilitiesOptions}
    />
  );
};

export default SidebarFormContainer;
