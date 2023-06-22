import { handleLogout } from "../../Authentication/AuthProvider";
const LogOut = ({ status }) => {
  const logUserOut = () => {
    handleLogout();
    status();
  };

  return (
    <>
      <div onClick={logUserOut} className=" cursor-pointer hover:underline">
        Log Out
      </div>
    </>
  );
};

export default LogOut;
