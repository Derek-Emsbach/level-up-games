import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from "../../context/Modal";
import LoginFormPage from "../LoginFormPage";
import { login } from "../../store/session";
import LoginFormModal from "../LoginFormModal";
import './homepage.css'

function HomePage() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const demo = async (e) => {
    e.preventDefault();
    const user = {
      email: "demo@aa.io",
      password: "password",
    };
    setModalOpen(false);
    dispatch(login(user.email, user.password));
  };

  return (
    <div className="Splash">
      <div className="nav_bar">
        <div className="icon">

          <h1>Level up</h1>
        </div>


        <div className="splash-page">
          <button className="signup-button" onClick={demo}>
            Demo User
          </button>

          <button
            className="login-button"
            onClick={() => {
              setLoginModalOpen(true);
            }}
          >
            {" "}
            Login{" "}
          </button>
          {loginModalOpen && (
            <LoginFormModal setLoginModalOpen={setLoginModalOpen} />
          )}

          <button
            className="signup-button"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            {" "}
            Sign Up{" "}
          </button>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>

    </div>
  );
}

export default HomePage;
