import SignInForm from "@/components/auth/sign-in-form";
import {Suspense} from "react";

const SignInPage = () => {
  return <div className="flex items-center flex-col justify-center size-full">
    <div className="max-w-sm mx-auto size-full flex flex-col items-center mt-[270px]">
        <Suspense>
            <SignInForm />
        </Suspense>
    </div>
  </div>;
};

export default SignInPage;
