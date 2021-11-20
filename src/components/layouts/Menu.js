import { Home } from "@material-ui/icons";
import AccountBox from "@material-ui/icons/AccountBox";
import Avatar from "@mui/material/Avatar";

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="workspaces">Workspaces</div>
      <div>(내 프로필 사진)</div>
      <Avatar alt="photo" src="myPhoto.png" sx={{ width: 56, height: 56 }} />
      <hr />
      <div className="menu">
        <ul>
          <li>
            <Home />
            My workspace
          </li>
          <li>
            <AccountBox />
            내정보
          </li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
