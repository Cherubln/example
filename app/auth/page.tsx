"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FormFields, authSchema } from "../validationSchemas";
import InputField from "../components/input-field";
import { useRouter } from "next/navigation";
import { createUser, getUser } from "../action";
import Link from "next/link";

const Page = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const router = useRouter();
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setError("");
    const action = isRegister ? createUser : getUser;
    const { user, error } = await getUser(data);
    if (error) {
      return setError(error);
    }
    console.log(user);
    router.push("/");
  });

  return (
    <div className="grid place-items-center my-10 ">
      <h2 className="text-3xl mb-6 font-semibold text-primary">
        {isRegister ? "Register" : "Login"}
      </h2>
      <form className="flex flex-col w-80 gap-2" onSubmit={onSubmit}>
        <div className="flex flex-col ">
          <InputField name="email" errors={errors} restProps={register} />
          <InputField name="password" errors={errors} restProps={register} />
          <button className="btn btn-primary">
            {isRegister ? "Register " : "Login "}
            {isSubmitting && (
              <span className="loading loading-infinity loading-lg"></span>
            )}
          </button>
        </div>
        <Link href={"api/auth/signin"}>Google login</Link>
        <div>
          <span>
            {isRegister
              ? "Already have an acount? "
              : "Don't have an account? "}
          </span>
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent  text-center hover:underline cursor-pointer"
            onClick={() => setIsRegister((prev) => !prev)}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </div>
        {error && (
          <div
            role="alert"
            className="alert alert-error p-2 px-5 cursor-pointer flex items-center"
            onClick={() => setError(undefined)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-base flex-1">{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Page;
