import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import { NEW_FORUM_TOPIC } from "../routes/const";

const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Home = () => {
  return (
    <Container>
      <ActionBar>
        <h1>List of topics to discuss</h1>
        <Link to={NEW_FORUM_TOPIC}>
          <Button>Make a forum topic</Button>
        </Link>
      </ActionBar>
    </Container>
  );
};

export default Home;
