import React from "react";
import { AuthInput, SubmitButton } from "../../../Components";
import {
  TitleWrapper,
  Title,
  SubTitle,
  FormFooter,
  SignUpLink,
} from "./ForgotPassStyle";
import { Form, Field } from "react-final-form";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import fetchAPI from "../../../APIService/fetchService";

interface ForgotPasswordProps {}
interface ForgotPasswordValues {
  email: string;
}
const ForgotPassword: React.FC<ForgotPasswordProps> = ({}) => {
  const handleSubmit = async ({ email }: ForgotPasswordValues) => {
    await fetchAPI.forgotPassword(email);
  };
  return (
    <div>
      <TitleWrapper>
        <Title>Forgot Password</Title>
        <SubTitle>
          Please enter your email address. You will receive a link to reset your
          password via email.
        </SubTitle>
      </TitleWrapper>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <div>
            <Field name="email">
              {(props) => (
                <AuthInput placeholder="Email" icon={faUser} {...props} />
              )}
            </Field>

            <SubmitButton onClick={handleSubmit} title="Submit" />
          </div>
        )}
      </Form>

      <FormFooter>
        <SubTitle>Remember password?</SubTitle>
        <SignUpLink to="/login">Sign Ip</SignUpLink>
      </FormFooter>
    </div>
  );
};

export default ForgotPassword;
