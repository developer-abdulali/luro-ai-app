"use client";

import LoadingIcon from "@/components/ui/loading-icon";
import {AuthenticateWithRedirectCallback} from "@clerk/nextjs";

export default function SignUpSSOCallbackPage() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <LoadingIcon size="lg"/>
                <p className="text-sm text-muted-foreground">Completing sign up...</p>
                <AuthenticateWithRedirectCallback signInForceRedirectUrl="/app" signUpForceRedirectUrl="/app"/>
            </div>
        </div>
    );
}
