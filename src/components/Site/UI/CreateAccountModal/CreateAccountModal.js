import classes from "./CreateAccountModal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const CreateAccountModal = (props) => {
  function submitHandler(e) {
    e.preventDefault();
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div>
          <div className={classes.overlayContainer}>
            <div className={classes.overlay}>
              <p>Open your bank account in just 5 minutes</p>
              <form onSubmit={submitHandler}>
                <label>Username</label>
                <input></input>

                <label>Password</label>
                <input></input>

                <label htmlFor="email">Email</label>
                <input type="email"></input>
                <button>Confirm</button>
              </form>
            </div>
          </div>
          <div className={classes.backdrop} onClick={props.onCloseModal}></div>
        </div>,
        document.getElementById("createAccount-root")
      )}
    </Fragment>
  );
};

export default CreateAccountModal;
