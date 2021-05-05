import { AxiosResponse } from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAPI from "../../../APIService/fetchService";
import { userActions, userSelector } from "../../../Store";
import { Form, Field } from "react-final-form";
import {
  ForgotPassLink,
  FormFooter,
  LinkWrapper,
  SignUpLink,
  SubTitle,
  Title,
  TitleWrapper,
} from "./LoginStyle";
import { AuthInput, SubmitButton } from "../../../Components";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

interface LoginProps {}
interface LoginValues {
  email: string;
  password: string;
}
const Login: React.FC<LoginProps> = ({}) => {
  const dispatch = useDispatch();
  const handleSubmit = async ({ email, password }: LoginValues) => {
    const res: AxiosResponse = await fetchAPI.signIn({ email, password });
    dispatch(userActions.setToken(res.headers["access-token"]));
  };

  return (
    <div>
      <TitleWrapper>
        <Title>Welcome to BaseballCloud!</Title>
        <SubTitle>Sign into your account here:</SubTitle>
      </TitleWrapper>
      <Form onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
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
