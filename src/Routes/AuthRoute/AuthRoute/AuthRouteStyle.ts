import styled from "styled-components";
import image from "../../../Assets/img/authBG.png";
export const AuthWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  display: flex;
  background-image: url(${image});
  background-position: top center;
  background-size: cover;
`;

export const FormContainer = styled.div`
  background: hsla(0, 0%, 100%, 0.8);
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(0 0 0 / 40%);
  backdrop-filter: blur(5px);
  width: 100%;
  max-width: 450px;
`;
