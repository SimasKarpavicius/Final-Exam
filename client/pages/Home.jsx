import { useCallback, useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import Button from "../components/Button";
import { NEW_FORUM_TOPIC } from "../routes/const";
import { getTopics } from "../api/topic.js";
import _, { isEmpty } from "lodash";
import { useEffectOnce } from "../hooks/useEffectOnce.js";

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
  const { isLoggedIn } = useContext(UserContext);
  const [topics, setTopics] = useState([]);

  const refreshTopics = useCallback(async () => {
    const response = await getTopics();
    setTopics(response);
  }, []);

  useEffectOnce(() => {
    refreshTopics();
  });

  const topicsJsx = topics.map((topic) => {
    const { title, description } = topic;
    const abbreviatedDescription = _.truncate(description, { length: 100 });
    return (
      <div key={title}>
        <h2>{title}</h2>
        <p>{abbreviatedDescription}</p>
      </div>
    );
  });

  return (
    <Container>
      <ActionBar>
        <h1>List of forum topics to discuss</h1>
        {isLoggedIn && (
          <Link to={NEW_FORUM_TOPIC}>
            <Button variant="contained">Make a forum topic</Button>
          </Link>
        )}
      </ActionBar>
      {isLoggedIn && !isEmpty(topics) && topicsJsx}
      {isLoggedIn && isEmpty(topics) && (
        <div>
          <h2>Forum is empty. Feel free to create some topics to discuss.</h2>
          <p>
            Everyone is welcome to use our forums free of charge. Respect each
            other. Be open to different opinions. Be happy!
          </p>
        </div>
      )}
    </Container>
  );
};

export default Home;
