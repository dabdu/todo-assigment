"use client";
import { InputField } from "@/components/Form";
import { AuthContainer } from "@/components/Layout";
import { emailReg, textReg } from "@/constants/regex";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    if (data?.password !== data?.confirmPassword) {
      toast.error("Passwords Does not Match");
    } else {
      try {
        setLoading(true);
        // Create User and Password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data?.email,
          data?.password
        );
        // Update the user profile with the first name
        await updateProfile(userCredential.user, {
          displayName: data?.name,
        });
        router.push("/sign-in");
        toast.success("Registration Successfull, Please Login");
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
    }
  };
  return (
    <AuthContainer isSignUp>
      <form className="space-y-4">
        {/* Name */}
        <InputField
          label="Name"
          name="name"
          placeholder="Enter Name"
          control={control}
          rules={{
            required: "Name is required",
            pattern: {
              value: textReg,
              message: "Invalid Name",
            },
          }}
        />
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
            minLength: {
              value: 8,
              message: "Password Must Be Atleast 8 Characters",
            },
          }}
        />
        {/* Confirm Password */}
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          control={control}
          rules={{
            required: "Confirm Password is required",
            minLength: {
              value: 8,
              message: "Password Must Be Atleast 8 Characters",
            },
          }}
        />
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </div>
      </form>
    </AuthContainer>
  );
};

export default SignUpPage;
