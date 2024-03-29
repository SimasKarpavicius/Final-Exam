import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FormikField from "../components/FormikField";
import Button from "../components/Button";
import { LOGIN_PATH } from "../routes/const";
import axios from "axios";

const Container = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const StyledField = styled.div`
  margin-bottom: 1rem;
`;

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const result = await axios.post("http://localhost:3000/Register", {
        email,
        password,
      });
      console.log(result);
      navigate(LOGIN_PATH);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Title>Register form</Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
          repeatedPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          email: Yup.string().required("Email is required").email(),
          password: Yup.string().required("Password is required").min(8),
          repeatedPassword: Yup.string()
            .required("Repeated password is required")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
        })}
      >
        <Form>
          <StyledField>
            <FormikField label="Email" name="email" />
          </StyledField>
          <StyledField>
            <FormikField label="Password" name="password" type="password" />
          </StyledField>
          <StyledField>
            <FormikField
              label="Repeat password"
              name="repeatedPassword"
              type="password"
            />
          </StyledField>
          <Button type="submit">Register</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default Register;
