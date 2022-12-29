import classes from "./MainNav.module.css";
import { Link as Scroll } from "react-scroll";
import logo from "../../../assets/img/iconTextRow.png";
import { Fragment, useState } from "react";
import CreateAccountModal from "../UI/CreateAccountModal/CreateAccountModal";

const MainNav = () => {
  const [modalIsOpen, setModal] = useState(false);

  function closeModalHandler() {
    setModal(false);
  }

  function openModalHandler() {
    setModal(true);
  }

  return (
    <Fragment>
      {modalIsOpen && <CreateAccountModal onCloseModal={closeModalHandler} />}
      <div className={classes.navContainer}>
        <img src={logo} alt="Paypal logo" className={classes.logo} />
        <nav className={classes.nav}>
          <Scroll>Features</Scroll>
          <Scroll>Operations</Scroll>
          <Scroll>Testimonials</Scroll>
          <div onClick={openModalHandler}>Open account</div>
        </nav>
      </div>
    </Fragment>
  );
};

export default MainNav;
