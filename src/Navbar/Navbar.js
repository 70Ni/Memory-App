import React from "react";
import { Link } from "react-router-dom";
import Auth from "../Components/Auth/Auth";

function Navbar() {
  const user = null;
  return (
    <div>
      <div className="Nav-container">
        <h1 component={Link} to="/" className="typography-Header">
          Memories
        </h1>
        <div className="Toolbar-section">
          {user ? (
            <div>
              <img
                className="profile"
                alt={user.result.name}
                src={user.result.imgageUrl}
              >
                {user.result.name.charAt(0)}
              </img>
              <div className="user-name">{user.result.name}</div>
              <button>Logout</button>
            </div>
          ) : (
            <button component={Link} to="/auth">
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
