const Login = ({ logIn }) => {
  const loginClickHandler = () => {
    logIn();
  };
  return (
    <div className="login cursor-pointer" onClick={loginClickHandler}>
      Login
    </div>
  );
};

export default Login;
