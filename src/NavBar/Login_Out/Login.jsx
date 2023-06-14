import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
const Login = ({ status, logCheck }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);

  const hasAccountHandler = () => {
    setHasAccount((prevState) => (prevState = !prevState));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {hasAccount ? (
        <>
          <div
            className=" text-white font-bold hover:underline cursor-pointer"
            onClick={openModal}
          >
            Login/Register
          </div>
          <LoginForm
            isOpen={modalOpen}
            onClose={closeModal}
            status={status}
            hasAccount={hasAccountHandler}
            logCheck={logCheck}
          />
        </>
      ) : (
        <>
          <div
            className=" text-white font-bold hover:underline cursor-pointer"
            onClick={openModal}
          >
            Login/Register
          </div>
          <RegisterForm
            status={status}
            isOpen={modalOpen}
            onClose={closeModal}
            hasAccount={hasAccountHandler}
          />
        </>
      )}
    </>
  );
};

export default Login;
