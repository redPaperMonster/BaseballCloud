import React from "react";
import { useDispatch } from "react-redux";
import fetchAPI from "../../../APIService/fetchService";
import { userActions } from "../../../Store";
import { Form, Field } from "react-final-form";
import {
  ForgotPassLink,
  FormFooter,
  LinkWrapper,
  SignUpLink,
  SubTitle,
  Title,
  TitleWrapper,
  ErrorText,
  ErrorWrapper,
} from "./LoginStyle";
import { AuthInput, SubmitButton } from "../../../Components";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FORM_ERROR } from "final-form";

interface LoginValues {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ email, password }: LoginValues) => {
    const res = await fetchAPI.signIn({ email, password });
    if (res.errors && !res.success) {
      return { [FORM_ERROR]: res.errors.find(() => true) };
    } else {
      dispatch(userActions.setToken(res.headers["access-token"]));
    }
  };

  return (
    <div>
      <TitleWrapper>
        <Title>Welcome to BaseballCloud!</Title>
        <SubTitle>Sign into your account here:</SubTitle>
      </TitleWrapper>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit, submitError }) => (
          <div>
            <Field name="email">
              {(props) => (
                <AuthInput placeholder="Email" icon={faUser} {...props} />
              )}
            </Field>
            <Field name="password">
              {(props) => (
                <AuthInput
                  placeholder="Password"
                  icon={faLock}
                  {...props}
                  type="password"
                />
              )}
            </Field>
            {submitError && (
              <ErrorWrapper>
                <ErrorText>{submitError}</ErrorText>
              </ErrorWrapper>
            )}

            <SubmitButton onClick={handleSubmit} title="Sign in" />
          </div>
        )}
      </Form>
      <LinkWrapper>
        <ForgotPassLink to="/forgotpassword">
          Forgotten password?
        </ForgotPassLink>
      </LinkWrapper>
      <FormFooter>
        <SubTitle>Don’t have an account?</SubTitle>
        <SignUpLink to="/registration">Sign Up</SignUpLink>
      </FormFooter>
    </div>
  );
};

export default Login;
