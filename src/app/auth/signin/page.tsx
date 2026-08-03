import SignInForm from "@/components/auth/sign-in-form";
import {Suspense} from "react";

const SignInPage = () => {
    return (
        <div className="flex items-center flex-col justify-center min-h-screen w-full p-4">
            <div className="max-w-sm mx-auto w-full flex flex-col items-center">
                <Suspense>
                    <SignInForm/>
                </Suspense>
            </div>
        </div>
    );
};

export default SignInPage;
