import SignUpForm from "@/components/auth/sign-up-form";
import {Suspense} from "react";

const SignUpPage = () => {
    return (
        <div className="flex items-center flex-col justify-center min-h-screen w-full p-4">
            <div className="max-w-sm mx-auto w-full flex flex-col items-center">
                <Suspense>
                    <SignUpForm/>
                </Suspense>
            </div>
        </div>
    );
};

export default SignUpPage;
