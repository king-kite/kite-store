const SignIn = (username, password) => {
  const unUserInfo = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(unUserInfo);
  if (userInfo.username === username && userInfo.password1 === password) {
    localStorage.setItem("token", "The_Only_Token_Available");
    return "The_Only_Token_Available";
  } else return null;
};

export default SignIn;
