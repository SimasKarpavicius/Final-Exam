import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOME_PATH, topNavigationItems } from "../routes/const";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { BiLogOut } from "react-icons/bi";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;

const Logo = styled.img`
  width: 200px;
  height: 50px;
  margin-left: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoutIcon = styled(BiLogOut)`
  cursor: pointer;
  color: grey;
`;

const Name = styled.span`
  font-weight: 500;
`;

const NavigationBar = () => {
  const { user, isLoggedIn, handleLogout } = useContext(UserContext);

  return (
    <Header>
      <Link to={HOME_PATH}>
        <Logo
          src="https://forum.teladochealth.com/wp-content/uploads/2023/03/Wordmark_Forum-Plum_RGB.png"
          alt="logo"
        />
      </Link>
      <Nav>
        {topNavigationItems.map(
          (navItem) =>
            !(navItem.hideOnAuth && isLoggedIn) && (
              <Link key={navItem.path} to={navItem.path}>
                {navItem.title}
              </Link>
            )
        )}
        {isLoggedIn && user && (
          <>
            <Name>{user.email}</Name>
            <LogoutIcon fontSize={24} onClick={handleLogout} />
          </>
        )}
      </Nav>
    </Header>
  );
};

export default NavigationBar;
