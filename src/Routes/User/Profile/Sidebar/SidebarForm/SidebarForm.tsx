import React, { ChangeEvent } from "react";
import { Field, Form } from "react-final-form";
import { FormInput, FormSelect, SubmitButton } from "../../../../../Components";
import { SelectOptionType, validation } from "../../../../../Utils";
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
  UploadImageInput,
  UserImage,
} from "./SidebarFormStyle";
import image from "../../../../../Assets/img/UserAvatar.png";
import { UserDataType, userSelector } from "../../../../../Store";
import { SubmitButtonType } from "../../../../../Components/Button/SubmitButton/SubmitButton";
import { useSelector } from "react-redux";
import { hasEmptyValues } from "../Utils/hasEmptyValues";
import { setDataToOptions } from "../Utils/setDefaultOptions";

export interface SidebarFormStyleProps {
  url: string;
}

interface SidebarFormProps {
  setFormShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (values: UserDataType) => Promise<void>;
  userData: UserDataType;
  data: UserDataType;
  file: File | undefined;
  isImageUpload: boolean;
  handleUpload: () => Promise<void>;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => Promise<void>;
  positionOptions: SelectOptionType[];
  handsOptions: SelectOptionType[];
  schoolOptions: SelectOptionType;
  isUpdating: boolean;
  schoolYearsOptions: SelectOptionType[];
  teamsOptions: SelectOptionType;
  facilitiesOptions: SelectOptionType;
  preview: string | ArrayBuffer | null | undefined;
}

const SidebarForm: React.FC<SidebarFormProps> = ({
  setFormShow,
  handleSubmit,
  userData,
  data,
  file,
  isImageUpload,
  handleUpload,
  handleChange,
  handleCancel,
  positionOptions,
  handsOptions,
  schoolOptions,
  isUpdating,
  schoolYearsOptions,
  teamsOptions,
  facilitiesOptions,
  preview,
}) => {
  const requiredUserData = useSelector(userSelector.getUserRequiredData());
  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        initialValues={
          !hasEmptyValues(requiredUserData) && {
            ...setDataToOptions(userData),
          }
        }
        validate={(values) => validation.sidebarFormValidation(values)}
      >
        {({ handleSubmit }) => (
          <div>
            <ImageWrapper>
              <UserImage url={preview?.toString() || data.avatar || image} />
              <ChoosePhotoLabelWrapper>
                <Field<FileList> name="avatar">
                  {({}) => (
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
                          <UploadImageInput
                            type="file"
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
                {(props) => <FormInput placeholder="First name*" {...props} />}
              </Field>
              <Field name="last_name" validate={validation.required}>
                {(props) => <FormInput placeholder="Last name*" {...props} />}
              </Field>
            </NameFormsWrapper>

            <FormsSelectWrapper>
              <Field name="position" validate={validation.required}>
                {(props) => (
                  <FormSelect
                    options={positionOptions}
                    placeholder="Position*"
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
                  <FormInput placeholder="Feet*" {...props} type="number" />
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
                <FormInput placeholder="Weight*" {...props} type="number" />
              )}
            </Field>
            <HandSelectContainer>
              <HandSelectWrapper>
                <Field name="throws_hand" validate={validation.required}>
                  {(props) => (
                    <FormSelect
                      options={handsOptions}
                      placeholder="Throws*"
                      {...props}
                    />
                  )}
                </Field>
              </HandSelectWrapper>
              <HandSelectWrapper>
                <Field name="bats_hand" validate={validation.required}>
                  {(props) => (
                    <FormSelect
                      options={handsOptions}
                      placeholder="Bats*"
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
                  onClick={() => setFormShow(false)}
                  title="Cancel"
                  type={SubmitButtonType.cancel}
                />
              </FormButtonWrapper>
              <SubmitButton
                onClick={handleSubmit}
                title="Submit"
                loading={isUpdating}
              ></SubmitButton>
            </FormButtonContainer>
          </div>
        )}
      </Form>
    </div>
  );
};

export default SidebarForm;
