"use client";

import { useSignUp } from "@clerk/nextjs/legacy";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FADE_IN_VARIANTS } from "@/contants/animation";
import { OAuthStrategy } from "@clerk/types";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftIcon,
  Eye,
  EyeOff,
  Mail,
} from "lucide-react";
import LoadingIcon from "../ui/loading-icon";
import { Input } from "../ui/input";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.74 1.4-.6.69-1.13 1.8-0.99 2.86 1.04.08 2.12-.53 2.77-1.32z" />
  </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path fill="#EA4335" d="M20 18h-2V9.25L12 13.8 4 9.25V18H2V6h1.7l8.3 6.35L20.3 6H22v12h-2z" />
    <path fill="#4285F4" d="M22 6v12h-2V9.25l2-1.5V6z" />
    <path fill="#34A853" d="M2 18h2V9.25L2 7.75V18z" />
    <path fill="#FBBC05" d="M3.7 6L12 12.35 20.3 6H3.7z" />
  </svg>
);

const OutlookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#0078D4"
      d="M1 5.5A1.5 1.5 0 0 1 2.5 4h10A1.5 1.5 0 0 1 14 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 18.5v-13z"
    />
    <path fill="#28A8EA" d="M14 7.5L22 4v16l-8-3.5V7.5z" />
    <path fill="#002050" d="M14 7.5l8-3.5v3l-8 3.5v-3z" opacity="0.2" />
    <path fill="#FFF" d="M7.5 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);

const SignUpForm = () => {
  const router = useRouter();
  const params = useSearchParams();

  const from = params.get("from");

  const { isLoaded, signUp, setActive } = useSignUp();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(true);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isEmailLoading, setIsEmailLoading] = useState<boolean>(false);
  const [isCodeLoading, setIsCodeLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [isAppleLoading, setIsAppleLoading] = useState<boolean>(false);

  const handleOAuth = async (strategy: OAuthStrategy) => {
    if (strategy === "oauth_google") {
      setIsGoogleLoading(true);
    } else {
      setIsAppleLoading(true);
    }

    try {
      if (!signUp) return;
      await signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/auth/sso-callback",
        redirectUrlComplete: "/app",
      });

      toast.loading(
        `Redirecting to ${strategy === "oauth_google" ? "Google" : "Apple"}...`
      );
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during authentication.");
    } finally {
      setIsGoogleLoading(false);
      setIsAppleLoading(false);
    }
  };

  const handleEmailSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoaded || !signUp) return;

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!password) {
      toast.error("Please enter a password.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    setIsEmailLoading(true);

    try {
      await signUp.create({
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setIsCodeSent(true);
      toast.success("Verification code sent to your email.");
    } catch (error: any) {
      console.error(JSON.stringify(error, null, 2));
      const firstErr = error?.errors?.[0];
      switch (firstErr?.code) {
        case "form_identifier_exists":
          toast.error("An account with this email already exists. Please sign in.");
          router.push("/auth/signin?from=signup");
          break;
        case "form_password_length_too_short":
          toast.error("Password is too short. Must be at least 8 characters.");
          break;
        case "form_password_pwned":
          toast.error("Password is too common. Please choose a stronger password.");
          break;
        case "too_many_attempts":
          toast.error("Too many attempts. Please try again later.");
          break;
        case "form_param_format_invalid":
          toast.error("Invalid email address. Please try again.");
          break;
        default:
          toast.error(firstErr?.message || "An error occurred. Please try again.");
      }
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoaded || !signUp) return;

    if (!code) {
      toast.error("Please enter the verification code.");
      return;
    }

    setIsCodeLoading(true);

    try {
      let completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "missing_requirements") {
        if (completeSignUp.missingFields?.includes("password")) {
          if (password) {
            completeSignUp = await signUp.update({ password });
          } else {
            toast.error("Password is required to complete registration.");
            setIsCodeLoading(false);
            return;
          }
        }
      }

      if (completeSignUp.status === "complete") {
        if (setActive) {
          await setActive({ session: completeSignUp.createdSessionId });
        }
        toast.success("Account created successfully!");
        router.push("/app");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
        toast.error("Please complete all required fields.");
      }
    } catch (error: any) {
      console.error(JSON.stringify(error, null, 2));
      const firstErr = error?.errors?.[0];
      switch (firstErr?.code) {
        case "form_code_incorrect":
          toast.error("Invalid verification code. Please try again.");
          break;
        case "too_many_attempts":
          toast.error("Too many attempts. Please try again later.");
          break;
        case "verification_failed":
          toast.error("Verification failed. Please try again.");
          break;
        default:
          toast.error(firstErr?.message || "An error occurred. Please try again.");
      }
    } finally {
      setIsCodeLoading(false);
    }
  };

  useEffect(() => {
    if (from) setIsOptionsOpen(true);
  }, [from]);

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* Clerk CAPTCHA Container */}
      <div
        id="clerk-captcha"
        className="w-full flex justify-center items-center empty:hidden my-3 overflow-hidden rounded-xl bg-neutral-900/80 border border-neutral-800/80 p-2 transition-all shadow-lg [&_iframe]:invert-[0.92] [&_iframe]:hue-rotate-180 [&_iframe]:contrast-[1.1] [&_iframe]:rounded-xl [&_iframe]:bg-transparent"
      />

      <motion.div
        variants={FADE_IN_VARIANTS}
        initial="hidden"
        animate="visible"
        className="w-full text-center"
      >
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Luro"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
          </Link>
        </div>
        <h1 className="mt-4 text-2xl text-center font-semibold">
          {isCodeSent
            ? "Verify your email"
            : isOptionsOpen
              ? "Create your Luro account"
              : "Sign up with Email"}
        </h1>
        <p className="text-sm mt-2 text-muted-foreground">
          {isCodeSent
            ? "Enter the 6-digit code sent to " + email
            : isOptionsOpen
              ? "Choose a method to get started"
              : "Enter your email and password to create an account"}
        </p>
      </motion.div>

      {isOptionsOpen ? (
        <motion.div
          variants={FADE_IN_VARIANTS}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 py-6 w-full"
        >
          <Button
            size="lg"
            type="button"
            variant="outline"
            disabled={isGoogleLoading || isAppleLoading || isEmailLoading}
            onClick={() => handleOAuth("oauth_google")}
            className="w-full relative justify-center border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-white"
          >
            {isGoogleLoading ? (
              <LoadingIcon className="w-4 h-4 absolute left-4" />
            ) : (
              <GoogleIcon className="w-4 h-4 absolute left-4" />
            )}
            Continue with Google
          </Button>

          <Button
            size="lg"
            type="button"
            variant="outline"
            disabled={isGoogleLoading || isAppleLoading || isEmailLoading}
            onClick={() => handleOAuth("oauth_apple")}
            className="w-full relative justify-center border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-white"
          >
            {isAppleLoading ? (
              <LoadingIcon className="w-4 h-4 absolute left-4" />
            ) : (
              <AppleIcon className="w-4 h-4 absolute left-4" />
            )}
            Continue with Apple
          </Button>

          <Button
            size="lg"
            type="button"
            variant="outline"
            disabled={isGoogleLoading || isAppleLoading || isEmailLoading}
            onClick={() => setIsOptionsOpen(false)}
            className="w-full relative justify-center border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-white"
          >
            <Mail className="w-4 h-4 absolute left-4 text-muted-foreground" />
            Continue with Email
          </Button>

          <div className="text-center pt-2 text-xs text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="text-purple-400 hover:underline font-medium"
            >
              Sign in
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className="w-full">
          {isCodeSent ? (
            <motion.form
              variants={FADE_IN_VARIANTS}
              initial="hidden"
              animate="visible"
              onSubmit={handleVerifyCode}
              className="py-6 w-full flex flex-col gap-4"
            >
              <div className="w-full">
                <Input
                  autoFocus={true}
                  name="code"
                  type="text"
                  value={code}
                  maxLength={6}
                  disabled={isCodeLoading}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Verification Code"
                  className="w-full text-center tracking-widest text-lg bg-neutral-950/80 border-neutral-800"
                />
              </div>
              <Button
                type="submit"
                disabled={isCodeLoading}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium"
              >
                {isCodeLoading ? (
                  <LoadingIcon size="sm" className="mr-2" />
                ) : (
                  "Verify & Create Account"
                )}
              </Button>
              <div className="w-full flex items-center gap-2 pt-2">
                <Button
                  asChild
                  type="button"
                  variant="outline"
                  disabled={isCodeLoading}
                  className="w-full border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-white gap-2"
                >
                  <Link href="https://mail.google.com" target="_blank">
                    <GmailIcon className="w-4 h-4" />
                    Gmail
                  </Link>
                </Button>
                <Button
                  asChild
                  type="button"
                  variant="outline"
                  disabled={isCodeLoading}
                  className="w-full border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 text-white gap-2"
                >
                  <Link href="https://outlook.live.com" target="_blank">
                    <OutlookIcon className="w-4 h-4" />
                    Outlook
                  </Link>
                </Button>
              </div>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsCodeSent(false)}
                disabled={isCodeLoading}
                className="w-full mt-2 text-muted-foreground hover:text-white"
              >
                <ArrowLeftIcon className="mr-2 w-3.5 h-3.5" />
                Change Email / Password
              </Button>
            </motion.form>
          ) : (
            <motion.form
              variants={FADE_IN_VARIANTS}
              initial="hidden"
              animate="visible"
              onSubmit={handleEmailSignUp}
              className="py-6 w-full flex flex-col gap-4"
            >
              <div className="w-full space-y-3">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block text-left">
                    Email address
                  </label>
                  <Input
                    autoFocus={true}
                    name="email"
                    type="email"
                    value={email}
                    disabled={isEmailLoading}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-neutral-950/80 border-neutral-800"
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1 block text-left">
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      disabled={isEmailLoading}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 8 characters"
                      className="w-full bg-neutral-950/80 border-neutral-800 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2 pt-2">
                <Button
                  type="submit"
                  disabled={isEmailLoading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium"
                >
                  {isEmailLoading ? (
                    <LoadingIcon size="sm" className="mr-2" />
                  ) : (
                    "Create Account"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setIsOptionsOpen(true)}
                  disabled={isEmailLoading}
                  className="w-full text-muted-foreground hover:text-white"
                >
                  <ArrowLeftIcon className="mr-2 w-3.5 h-3.5" />
                  All Sign Up Options
                </Button>
              </div>
            </motion.form>
          )}
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
