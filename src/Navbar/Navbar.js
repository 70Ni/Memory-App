import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Auth from "../Components/Auth/Auth";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { LOGOUT } from "../constants/actionConstants";
import * as actionType from "../constants/actionConstants";

function Navbar() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const history = useDispatch();
  const dispatch = useDispatch();
  useEffect(() => {
    const token = user?.token;
    setuser(JSON.parse(localStorage.getItem("profile")));
    console.log(user);
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT", data: null });
    history("/");
    setuser(null);
  };

  console.log(user);
  return (
    <div>
      <div
        className="Nav-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <h1 component={Link} to="/" className="typography-Header">
          Memories
        </h1>
        <div className="Toolbar-section">
          {user ? (
            <div
              style={{
                display: "flex",
                justifyContent: "spaceBetween",
                alignItems: "center",
              }}
            >
              <img
                className="profile"
                alt={user.result.name}
                src={user.result.imageUrl}
                referrerpolicy="no-referrer"
                style={{
                  padding: 20,
                  borderRadius: 80,
                  width: 40,
                  height: "auto",
                }}
              />

              <div className="user-name">{user.result.name}</div>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div style={{ zIndex: 5, padding: 20 }}>
              <Link to="/auth">
                <button type="button">sign In</button>
              </Link>
              {/* <Link to="/home">logout</Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
