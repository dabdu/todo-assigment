"use client";
import { InputField } from "@/components/Form";
import { AuthContainer } from "@/components/Layout";
import { emailReg } from "@/constants/regex";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      // Create User and Password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data?.email,
        data?.password
      );
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      router.push("/");
      reset();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error?.message);
      } else {
        toast.error("An unkwown Error Occured");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <form className="space-y-4">
        {/* Email */}
        <InputField
          label="Email Address"
          type="email"
          name="email"
          placeholder="Example@email.com"
          autoComplete="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: emailReg,
              message: "Invalid Email Address",
            },
          }}
          isTrim
        />
        {/* Password */}
        <InputField
          label="Password"
          name="password"
          type="password"
          placeholder="Enter Password"
          control={control}
          rules={{
            required: "Password is required",
          }}
        />
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-slate-800 text-white rounded-md hover:bg-slate-700"
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </form>
    </AuthContainer>
  );
};

export default SignUpPage;
