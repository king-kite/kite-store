const SignUp = (values) => {
  const token = "The_Only_Token_Available";
  values.token = token;
  localStorage.setItem("userInfo", JSON.stringify(values));
  return token;
};

export default SignUp;
