import classes from "./AppHeader.module.css";
import logo from "../../../assets/img/textBig.png";

const AppHeader = () => {
  return (
    <nav className={classes.nav}>
      <p>Welcome back jane!</p>
      <img src={logo} alt="paypal logo" />
      <div>
        <button>Home</button>
        <button>Logout</button>
      </div>
    </nav>
  );
};

export default AppHeader;
