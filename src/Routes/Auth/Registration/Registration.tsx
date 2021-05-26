import React, { useState } from "react";
import { CheckIcon } from "../../../Assets/icons";
import {
  Icon,
  RegistrationNote,
  SubTitle,
  SwitchRolePlayer,
  SwitchRoleScout,
  SwitchWrapper,
  Title,
  RegistrationWrapper,
  InfoWrapper,
  InfoLink,
  FooterText,
  Footer,
  FooterLink,
} from "./RegistrationStyle";
import { Form, Field } from "react-final-form";
import { faLock, faUser, faCheck } from "@fortawesome/free-solid-svg-icons";
import fetchAPI from "../../../APIService/fetchService";
import { userActions } from "../../../Store";
import { useDispatch } from "react-redux";
import { AuthInput, SubmitButton } from "../../../Components";
import { validation } from "../../../Utils";

interface RegistrationProps {}
interface RegistrationValues {
  email: string;
  password: string;
  password_confirmation: string;
}
export type SwitchRoleButtonStyleProps = {
  checked: boolean;
};

const Registration: React.FC<RegistrationProps> = ({}) => {
  enum roles {
    player = "player",
    scout = "scout",
  }
  const [role, setRole] = useState<string>(roles.player);
  const dispatch = useDispatch();

  const handleSubmit = async ({
    email,
    password,
    password_confirmation,
  }: RegistrationValues) => {
    const res = await fetchAPI.signUp({
      email,
      password,
      password_confirmation,
      role,
    });
    if (res.errors && !res.success) {
      return { email: res.errors.full_messages.find(() => true) };
    } else {
      dispatch(userActions.setToken(res.headers["access-token"]));
    }
  };
  return (
    <RegistrationWrapper>
      <SwitchWrapper>
        <SwitchRolePlayer
          onClick={() => setRole(roles.player)}
          checked={role === roles.player}
        >
          {role === roles.player && (
            <Icon>
              <CheckIcon />
            </Icon>
          )}
          Sign up as Player
        </SwitchRolePlayer>
        <SwitchRoleScout
          onClick={() => setRole(roles.scout)}
          checked={role === roles.scout}
        >
          {role === roles.scout && (
            <Icon>
              <CheckIcon />
            </Icon>
          )}
          Sign up as Scout
        </SwitchRoleScout>
      </SwitchWrapper>
      <RegistrationNote>
        <Title>{role === roles.player ? "Players" : "Scout"}</Title>
        <SubTitle>
          {role === roles.player
            ? "Players have their own profile within the system and plan on having data collected."
            : "Coaches and scouts can view players in the system but do not have their own profile."}
        </SubTitle>
      </RegistrationNote>
      <Form
        onSubmit={handleSubmit}
        validate={(values) => validation.passwordEqualValidation(values)}
      >
        {({ handleSubmit }) => (
          <div>
            <Field name="email" validate={validation.emailValidate}>
              {(props) => {
                return (
                  <AuthInput placeholder="Email" icon={faUser} {...props} />
                );
              }}
            </Field>
            <Field name="password" validate={validation.passwordValidation}>
              {(props) => (
                <AuthInput
                  placeholder="Password"
                  icon={faLock}
                  {...props}
                  type="password"
                />
              )}
            </Field>
            <Field name="password_confirmation">
              {(props) => (
                <AuthInput
                  placeholder="Confirm Password"
                  icon={faCheck}
                  {...props}
                  type="password"
                />
              )}
            </Field>
            <InfoWrapper>
              By clicking Sign Up, you agree to our{" "}
              <InfoLink href="/legal/terms">Terms of Service</InfoLink> and{" "}
              <InfoLink href="/legal/privacy">Privacy Policy</InfoLink> .
            </InfoWrapper>
            <SubmitButton onClick={handleSubmit} title="Sign Up" />
          </div>
        )}
      </Form>
      <Footer>
        <FooterText>Already registered?</FooterText>
        <FooterLink to="/login">Sign In</FooterLink>
      </Footer>
    </RegistrationWrapper>
  );
};

export default Registration;
