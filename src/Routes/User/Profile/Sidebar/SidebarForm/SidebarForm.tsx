import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import {
  FormInput,
  FormSelect,
  LoaderWrapper,
  SubmitButton,
  ToastBody,
} from "../../../../../Components";
import { userActions, userSelector } from "../../../../../Store";
import { transformData, validation } from "../../../../../Utils";
import { mutations, queries } from "../../Schemas";
import {
  ChoosePhotoLabel,
  ChoosePhotoLabelWrapper,
  ErrorText,
  FileNameLabel,
  FormButtonContainer,
  FormButtonWrapper,
  FormsSelectWrapper,
  FormTextarea,
  FormTextareaWrapper,
  FormTitle,
  HandSelectContainer,
  HandSelectWrapper,
  HeightWrapper,
  ImageWrapper,
  NameFormsWrapper,
  SelectWrapper,
  TitleWrapper,
  UploadAvatarWrapper,
  UploadButton,
  UploadButtonsWrapper,
  UploadCancelButton,
  UserImage,
} from "./SidebarFormStyle";
import fetchService from "../../../../../APIService/fetchService";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import image from "../../../../../Assets/img/UserAvatar.png";

interface SidebarFormProps {
  setFormShow: () => void;
}

export interface SidebarFormStyleProps {
  url: string;
}

const handsOptions = [
  { value: "L", label: "L" },
  { value: "R", label: "R" },
];
const positionOptions = [
  { value: "Catcher", label: "Catcher" },
  { value: "First Base", label: "First Base" },
  { value: "Second Base", label: "Second Base" },
  { value: "Shortstop", label: "Shortstop" },
  { value: "Third Base", label: "Third Base" },
  { value: "Outfield", label: "Outfield" },
  { value: "Pitcher", label: "Pitcher" },
];
const schoolYearsOptions = [
  { value: "Freshman", label: "Freshman" },
  { value: "Sophomore", label: "Sophomore" },
  { value: "Junior", label: "Junior" },
  { value: "Senior", label: "Senior" },
  { value: "None", label: "None" },
];
const SidebarForm: React.FC<SidebarFormProps> = ({ setFormShow }) => {
  let { loading, data } = useQuery(queries.getCurrentProfile, {});
  const profile = useSelector(userSelector.getUserData());
  const [file, setFile] = useState<any>();
  const [url, setUrl] = useState<string>();
  const [userData, setUserData] = useState<any>();
  const [isImageUpload, setIsImageUpload] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const [updateUser, updateData] = useMutation(mutations.updateUser);
  const dispatch = useDispatch();
  const schools = useQuery(queries.getSchools, {
    variables: { search: "" },
  });
  useEffect(() => {
    if (!loading) {
      if (profile) {
        const { token, recent_events, _persist, ...newProfile } = profile;
        setUserData(newProfile);
      } else {
        setUserData(data.current_profile);
      }
    }
  }, [profile]);
  const teams = useQuery(queries.getTeams, {
    variables: { search: "" },
  });
  const facilities = useQuery(queries.getFacilities, {
    variables: { search: "" },
  });
  if (schools.loading || teams.loading || facilities.loading || loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
      </LoaderWrapper>
    );
  }

  const schoolOptions = schools.data.schools.schools.map((i: any) => {
    return { value: i, label: i.name };
  });
  const teamsOptions = teams.data.teams.teams.map((i: any) => {
    return { value: i.name, label: i.name, payload: i };
  });
  const facilitiesOptions = facilities.data.facilities.facilities.map(
    (i: any) => {
      return { value: i.u_name, label: i.u_name, payload: i };
    }
  );

  const handleSubmit = async (values: any) => {
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

  const handleUpload = async (e: any) => {
    setIsImageUpload(true);
    const res = await fetchService
      .uploadPhoto(file, { name: file.name })
      .then((res) => {
        setFile(null);
        return res;
      });
    setUrl(res.config.url.split("?")[0]);
    setIsImageUpload(false);
  };
  const handleCancel = async (e: any) => {
    setFile(null);
    setUrl("");
  };
  const handleChange = (event: any) => {
    const file = event.target.files[0];
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
    <div>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          ...userData,
          school: userData.school,
          teams: userData.teams,
          facilities: userData.facilities,
        }}
        validate={(values) => validation.sidebarFormValidation(values)}
      >
        {({ handleSubmit, submitError, errors, values }) => (
          <div>
            <ImageWrapper>
              <UserImage url={url || data.current_profile.avatar || image} />
              <ChoosePhotoLabelWrapper>
                <Field<FileList> name="avatar">
                  {({ input: { value, onChange, ...input } }) => (
                    <div>
                      {file ? (
                        <UploadAvatarWrapper>
                          <FileNameLabel>
                            {isImageUpload ? "Loading..." : file.name}
                          </FileNameLabel>
                          {!isImageUpload && (
                            <UploadButtonsWrapper>
                              <UploadButton onClick={handleUpload}>
                                Upload photo
                              </UploadButton>
                              <UploadCancelButton onClick={handleCancel}>
                                Cancel
                              </UploadCancelButton>
                            </UploadButtonsWrapper>
                          )}
                        </UploadAvatarWrapper>
                      ) : (
                        <ChoosePhotoLabel>
                          Choose Photo
                          <input
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleChange}
                          />
                        </ChoosePhotoLabel>
                      )}
                    </div>
                  )}
                </Field>
              </ChoosePhotoLabelWrapper>
            </ImageWrapper>
            <NameFormsWrapper>
              <Field name="first_name" validate={validation.required}>
                {(props) => <FormInput placeholder="First name" {...props} />}
              </Field>
              <Field name="last_name" validate={validation.required}>
                {(props) => <FormInput placeholder="Last name" {...props} />}
              </Field>
            </NameFormsWrapper>

            <FormsSelectWrapper>
              <Field name="position">
                {(props) => (
                  <FormSelect
                    options={positionOptions}
                    placeholder="Position"
                    {...props}
                  />
                )}
              </Field>
            </FormsSelectWrapper>
            <FormsSelectWrapper>
              <Field name="position2">
                {(props) => (
                  <FormSelect
                    options={positionOptions}
                    placeholder="Second position"
                    {...props}
                  />
                )}
              </Field>
            </FormsSelectWrapper>
            <TitleWrapper>
              <FormTitle>Personal Info</FormTitle>
            </TitleWrapper>
            <Field name="age" validate={validation.ageValidation}>
              {(props) => (
                <FormInput placeholder="Age*" {...props} type="number" />
              )}
            </Field>
            <HeightWrapper>
              <Field name="feet" validate={validation.heightValidation}>
                {(props) => (
                  <FormInput placeholder="Feet" {...props} type="number" />
                )}
              </Field>
              <Field name="inches">
                {(props) => (
                  <FormInput placeholder="Inches" {...props} type="number" />
                )}
              </Field>
            </HeightWrapper>
            <Field name="weight" validate={validation.weightValidation}>
              {(props) => (
                <FormInput placeholder="Weight" {...props} type="number" />
              )}
            </Field>
            <HandSelectContainer>
              <HandSelectWrapper>
                <Field name="throws_hand">
                  {(props) => (
                    <FormSelect
                      options={handsOptions}
                      placeholder="Throws"
                      {...props}
                    />
                  )}
                </Field>
              </HandSelectWrapper>
              <HandSelectWrapper>
                <Field name="bats_hand">
                  {(props) => (
                    <FormSelect
                      options={handsOptions}
                      placeholder="Bats"
                      {...props}
                    />
                  )}
                </Field>
              </HandSelectWrapper>
            </HandSelectContainer>
            <TitleWrapper>
              <FormTitle>School</FormTitle>
            </TitleWrapper>
            <SelectWrapper>
              <Field name="school">
                {(props) => (
                  <FormSelect
                    options={schoolOptions}
                    placeholder="School"
                    isSearchable
                    {...props}
                  />
                )}
              </Field>
            </SelectWrapper>
            <SelectWrapper>
              <Field name="school_year">
                {(props) => (
                  <FormSelect
                    options={schoolYearsOptions}
                    placeholder="School Years"
                    {...props}
                  />
                )}
              </Field>
            </SelectWrapper>
            <SelectWrapper>
              <Field name="teams">
                {(props) => (
                  <FormSelect
                    options={teamsOptions}
                    placeholder="Team"
                    isSearchable
                    isMulti
                    {...props}
                  />
                )}
              </Field>
            </SelectWrapper>
            <TitleWrapper>
              <FormTitle>Facility</FormTitle>
            </TitleWrapper>
            <SelectWrapper>
              <Field name="facilities">
                {(props) => (
                  <FormSelect
                    options={facilitiesOptions}
                    placeholder="Facility"
                    isSearchable
                    isMulti
                    {...props}
                  />
                )}
              </Field>
            </SelectWrapper>
            <TitleWrapper>
              <FormTitle>About</FormTitle>
            </TitleWrapper>

            <Field name="biography">
              {({ input, meta }) => (
                <FormTextareaWrapper>
                  <FormTextarea
                    value={input.value}
                    onChange={(e) => input.onChange(e.currentTarget.value)}
                  />
                  {meta.error && <ErrorText>{meta.error}</ErrorText>}
                </FormTextareaWrapper>
              )}
            </Field>
            <FormButtonContainer>
              <FormButtonWrapper>
                <SubmitButton
                  onClick={setFormShow}
                  title="Cancel"
                  isCancelType
                />
              </FormButtonWrapper>
              <SubmitButton onClick={handleSubmit} title="Submit">
                {isUpdating && (
                  <Loader
                    type="ThreeDots"
                    color="#fff"
                    height={10}
                    width={20}
                  />
                )}
              </SubmitButton>
            </FormButtonContainer>
          </div>
        )}
      </Form>
    </div>
  );
};

export default SidebarForm;
