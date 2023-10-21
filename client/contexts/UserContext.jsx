import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const isLoggedIn = !!user;

  const handleLogin = (email, password) => {
    axios
      .get("http://localhost:3000/login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data === "Success") {
          setUser({ email });
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, handleLogin, handleLogout, isLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export { UserContext, UserProvider };
