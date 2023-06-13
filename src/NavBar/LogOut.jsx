const LogOut = ({ status }) => {
  const logUserOut = () => {
    localStorage.removeItem("accessToken");
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
