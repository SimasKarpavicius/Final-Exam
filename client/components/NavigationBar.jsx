import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOME_PATH, topNavigationItems } from "../routes/const";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;

const StyledLink = styled(Link)`
  margin-left: 1rem;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
  margin-left: 1rem;
`;

const NavigationBar = () => {
  return (
    <Header>
      <Link to={HOME_PATH}>
        <Logo
          src="https://forum.teladochealth.com/wp-content/uploads/2023/03/Wordmark_Forum-Plum_RGB.png"
          alt="logo"
          className="navigation-logo"
        />
      </Link>
      <nav>
        {topNavigationItems.map((navItem) => (
          <StyledLink
            key={navItem.path}
            to={navItem.path}
            className="navigation-item"
          >
            {navItem.title}
          </StyledLink>
        ))}
      </nav>
    </Header>
  );
};

export default NavigationBar;
