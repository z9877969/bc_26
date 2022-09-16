import styled from "styled-components";
import { Form } from "formik";

export const FormStyled = styled(Form)`
  max-width: 500px;
  margin: 0 auto;
  padding: 15px;

  border: 1px solid green;
  border-radius: 2px;
  background-color: rgba(44, 124, 138, 0.5);

  & > .label {
    margin-bottom: 10px;
  }
`;
