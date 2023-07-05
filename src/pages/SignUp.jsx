import React, { useEffect } from "react";
import SignUpForm from "../components/SignUpForm";
import Animation from "../components/Animation";

const SignUp = () => {
  useEffect(() => {
    document.title = "Sign Up";
  });

  return (
    <>
      <Animation />
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
