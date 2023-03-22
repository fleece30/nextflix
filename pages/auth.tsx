import React, { useCallback, useState } from "react";
import Image from "next/image";
import Input from "@/components/input";

interface AuthProps {}

const Auth: React.FC<AuthProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <>
      <div
        className={
          "relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover"
        }
      >
        <div
          className={
            "bg-black w-full h-full md:bg-opacity-0 md:bg-gradient-to-b from-black to-transparent"
          }
        >
          <nav className={"px-12 py-5"}>
            <Image
              src={"/images/logo.png"}
              alt={"Logo"}
              height={50}
              width={160}
            />
          </nav>
          <div className={"flex justify-center"}>
            <div
              className={
                "bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 md:max-w-md rounded-md w-full"
              }
            >
              <h2 className={"text-white text-4xl mb-8 font-semibold"}>
                {variant === "login" ? "Sign in" : "Register"}
              </h2>
              <div className={"flex flex-col gap-4"}>
                <Input
                  label={"Email"}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                  }}
                  id={"email"}
                  type={"email"}
                  value={email}
                />
                {variant === "register" && (
                  <Input
                    label={"Username"}
                    onChange={(e: any) => {
                      setUsername(e.target.value);
                    }}
                    id={"username"}
                    type={"username"}
                    value={username}
                  />
                )}
                <Input
                  label={"Password"}
                  onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
                  id={"password"}
                  type={"password"}
                  value={password}
                />
              </div>
              <button
                className={
                  "bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
                }
              >
                {variant === "login" ? "Login" : "Register"}
              </button>
              <p className={"text-neutral-500 mt-12 text-center"}>
                {variant === "login"
                  ? "First time using nextflix?"
                  : "Already registered?"}

                <span
                  onClick={toggleVariant}
                  className={"text-white ml-1 hover:underline cursor-pointer"}
                >
                  {variant === "login" ? "Create account" : "Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
