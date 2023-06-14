const LogOut = ({ status, logCheck }) => {
  const logUserOut = () => {
    // clears local storage when log out is clicked
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    status(); //
    logCheck();
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
