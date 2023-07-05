import React, { useEffect } from "react";
import Form from "../components/LoginForm";
import Animation from "../components/Animation";

export const Login = () => {
  useEffect(() => {
    document.title = "Login";
  });

  return (
    <>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <Form />
      </div>
      <Animation />
    </>
  );
};

export default Login;
