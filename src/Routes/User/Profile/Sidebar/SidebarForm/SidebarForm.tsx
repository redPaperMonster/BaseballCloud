import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Field, Form } from "react-final-form";
import { useDispatch } from "react-redux";
import {
  FormInput,
  FormSelect,
  LoaderWrapper,
  SubmitButton,
  ToastBody,
} from "../../../../../Components";
import { userActions } from "../../../../../Store";
import { transformData, validation } from "../../../../../Utils";
import { mutations, queries } from "../../Schemas";
import {
  ChoosePhotoLabel,
  ChoosePhotoLabelWrapper,
  ErrorText,
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
  UserImage,
} from "./SidebarFormStyle";
import fetchService from "../../../../../APIService/fetchService";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
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
  const [file, setFile] = useState<any>();
  const [imagePreview, setImagePreview] = useState<any>("");
  const [url, setUrl] = useState<string>();

  const [updateUser, updateData] = useMutation(mutations.updateUser);
  const dispatch = useDispatch();
  const schools = useQuery(queries.getSchools, {
    variables: { search: "" },
  });
  const teams = useQuery(queries.getTeams, {
    variables: { search: "" },
  });
  const facilities = useQuery(queries.getFacilities, {
    variables: { search: "" },
  });
  if (schools.loading || teams.loading || facilities.loading || loading) {
    return (
      <LoaderWrapper>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </LoaderWrapper>
    );
  }
  const userData = transformData(data.current_profile);

  const schoolOptions = schools.data.schools.schools.map((i: any) => {
    return { value: i, label: i.name };
  });
  const teamsOptions = teams.data.teams.teams.map((i: any) => {
    return { value: i, label: i.name };
  });
  const facilitiesOptions = facilities.data.facilities.facilities.map(
    (i: any) => {
      return { value: i, label: i.u_name };
    }
  );
  const handleSubmit = (values: any) => {
    updateUser({
      variables: {
        form: {
          ...values,
          biography: values.biography || " ",
        },
      },
    }).then(() => {
      toast.success(() => (
        <ToastBody text="Profile has been updated successfully." />
      ));
      dispatch(userActions.setData(values));
    });
    setFormShow();
  };

  //TODO: avatar!!!
  const handleUpload = async (e: any) => {
    const res = await fetchService.uploadPhoto(file, { name: file.name });

    setUrl(res.config.url.split("?"));
  };
  const handleChange = (event: any) => {
    let reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      let fileInfo = {
        name: file.name,
        type: file.type,
        size: Math.round(file.size / 1000) + " kB",
        base64: reader.result,
        file: file,
      };
      setImagePreview(reader.result);
      setFile(fileInfo);
      console.log(`fileInfo`, fileInfo);
    };
  };

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
              <UserImage url={imagePreview} />
              <ChoosePhotoLabelWrapper>
                <Field<FileList> name="avatar">
                  {({ input: { value, onChange, ...input } }) => (
                    <div>
                      {file ? (
                        <div>
                          <div>{file.name}</div>
                          <button onClick={handleUpload}>submit</button>
                        </div>
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
              <SubmitButton onClick={handleSubmit} title="Submit" />
            </FormButtonContainer>
          </div>
        )}
      </Form>
    </div>
  );
};

export default SidebarForm;
