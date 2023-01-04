import "./SideBar.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { LogoutAPI } from "../API";

export default function SideBar(role) {
  const navigate = useNavigate();

  return (
    <div id="SideBar">
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
      <div className="content">
        <div className="menu_top">
          <button
            className="menu_item"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <i className="bi bi-exclude" style={{ fontSize: "20px" }}></i>
            <span className="menu_option">DASHBOARD</span>
          </button>

          {role.role === "SUPERADMIN" && (
            <button
              className="menu_item"
              onClick={() => {
                navigate("/manage-members");
              }}
            >
              <i className="bi bi-grid-3x3" style={{ fontSize: "20px" }}></i>
              <span className="menu_option">GYM MEMBER</span>
            </button>
          )}
          {role.role === "SUPERADMIN" && (
            <button
              className="menu_item"
              onClick={() => {
                navigate("/manage-trainers");
              }}
            >
              <i
                className="bi bi-grid-3x3-gap-fill"
                style={{ fontSize: "20px" }}
              ></i>
              <span className="menu_option">PERSONAL TRAINER</span>
            </button>
          )}
        </div>
        <div className="menu_bottom">
          <button
            className="menu_item"
            onClick={() => {
              navigate("/profile");
            }}
          >
            <i
              className="bi bi-person-circle"
              style={{ fontSize: "20px" }}
              s
            ></i>
            <span className="option_logout">PROFILE</span>
          </button>
          <button
            className="menu_item"
            onClick={() => {
              LogoutAPI().then(() => navigate("/"));
            }}
          >
            <i className="bi bi-x-circle" style={{ fontSize: "20px" }}></i>
            <span className=" option_logout">LOG OUT</span>
          </button>
        </div>
      </div>
    </div>
  );
}
