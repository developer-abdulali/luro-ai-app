"use client";

import LoadingIcon from "@/components/ui/loading-icon";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function AuthCallbackPage() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/app");
        }, 500);
        return() => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <LoadingIcon size="lg"/>
                <p className="text-sm text-muted-foreground">Redirecting to app...</p>
            </div>
        </div>
    );
}
