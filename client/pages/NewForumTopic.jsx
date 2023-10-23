import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../routes/const";
import FormikField from "../components/FormikField";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import Button from "../components/Button";
import { newForumTopic } from "../api/topic";

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

const ErrorMessage = styled.h2`
  margin-top: 5rem;
  text-align: center;
`;

const Error = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required").min(3),
  description: Yup.string().required("Description is required"),
});

const NewForumTopic = () => {
  const [error, setError] = useState("");
  const { user, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await newForumTopic(values);
      navigate(HOME_PATH);
    } catch (error) {
      setError;
      console.log(error);
    }
  };

  if (!isLoggedIn) {
    return (
      <ErrorMessage>Please log in before adding new forum topic</ErrorMessage>
    );
  }

  return (
    <Container>
      <Title>Add new forum topic form</Title>
      <Formik
        initialValues={{
          title: "",
          description: "",
          userId: user.id,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <FormikField
            label="Title"
            name="title"
            placeholder="Title"
            required
          />
          <FormikField
            label="Description"
            name="description"
            placeholder="Description"
            component="textarea"
            rows={3}
            required
          />
          {error && <Error>{error}</Error>}
          <Button type="submit">Submit your topic</Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default NewForumTopic;
