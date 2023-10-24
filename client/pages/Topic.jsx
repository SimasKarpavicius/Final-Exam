import { useCallback, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";
import Button from "../components/Button";
import { NEW_ANSWER_PATH, NEW_FORUM_TOPIC } from "../routes/const";
import { getTopic } from "../api/topic.js";
import { isEmpty } from "lodash";
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

const ErrorMessage = styled.h2`
  margin-top: 1rem;
  text-align: center;
`;

const Topic = () => {
  const { topicId } = useParams();
  const { isLoggedIn } = useContext(UserContext);
  const [topic, setTopic] = useState([]);

  const refreshTopic = useCallback(async () => {
    const response = await getTopic(topicId);
    setTopic(response);
  }, []);

  useEffectOnce(() => {
    refreshTopic();
  });

  const answersJsx = topic?.answers?.map((answer) => {
    const { description, author, likes, dislikes } = answer;
    return (
      <div key={description}>
        <p>{description}</p>
        <div>
          <ul>
            <li>Author: {author} </li>
            <li>Likes: {likes} </li>
            <li>Dislikes: {dislikes}</li>
          </ul>
        </div>
      </div>
    );
  });

  return (
    <Container>
      <ActionBar>
        <div>
          <h2>{topic.title}</h2>
          <p>
            <strong>{topic.description}</strong>
          </p>
        </div>
        {isLoggedIn && (
          <Link to={NEW_FORUM_TOPIC}>
            <Button variant="contained">Make a forum topic</Button>
          </Link>
        )}
      </ActionBar>
      {isLoggedIn && !isEmpty(topic.answers) && answersJsx}
      <ErrorMessage>Please log in before adding new forum answer</ErrorMessage>
      {isLoggedIn && (
        <Link to={NEW_ANSWER_PATH.replace(":topicId", topicId)}>
          <Button variant="contained">Write a reply</Button>
        </Link>
      )}
    </Container>
  );
};

export default Topic;
