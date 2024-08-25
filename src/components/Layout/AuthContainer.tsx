import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthContProps {
  children: any;
  isSignUp?: boolean;
}

const AuthContainer: React.FC<AuthContProps> = ({ children, isSignUp }) => {
  return (
    <div className="flex items-center justify-center bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center w-full p-5 bg-white rounded-lg shadow-md overflow-hidden relative">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative z-10">
          <div className="md:w-[70%] w-[90%] pl-0 md:pl-12">
            <h2 className="text-2xl font-bold mb-6 text-black">
              {`${isSignUp ? "Welcome" : "Welcome Back"} 👋`}
            </h2>
            <p className="mb-4 text-slate-500 text-xs">
              Today is a new day. It's your day. You shape it. Sign in to start
              managing your projects.
            </p>
            {children}
            <div className="mt-6 text-center">
              {/* OR CONTAINER */}
              <div className="w-full flex flex-row justify-between items-center">
                <div className="h-[1.5px] bg-slate-200 rounded-full w-[42%]" />
                <p className="text-sm text-gray-600">Or</p>
                <div className="h-[1.5px] bg-slate-200 rounded-full w-[42%]" />
              </div>
              <button className="w-full flex flex-row justify-center items-center space-x-3 py-3 bg-slate-100 rounded-md mt-4">
                <Image
                  src={
                    "https://res.cloudinary.com/drkhwpadj/image/upload/v1724478689/google_etq5tc.png"
                  }
                  className="object-contain"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <p className="text-slate-700 font-medium text-sm">
                  Sign in with Google
                </p>
              </button>
              <button className="w-full flex flex-row justify-center items-center space-x-3 py-3 bg-slate-100 rounded-md mt-4">
                <Image
                  src={
                    "https://res.cloudinary.com/drkhwpadj/image/upload/v1724478689/facebook_epyt5c.png"
                  }
                  className="object-contain"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
                <p className="text-slate-700 font-medium text-sm">
                  Sign in with Facebook
                </p>
              </button>
              {isSignUp ? (
                <p className="mt-10 text-sm text-slate-700 font-medium">
                  Already have an Account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-blue-600 hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              ) : (
                <p className="mt-10 text-sm text-slate-700 font-medium">
                  Don't you have an account?{" "}
                  <Link
                    href="/sign-up"
                    className="text-blue-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              )}
            </div>
            <footer className="mt-16 text-center text-gray-500 text-xs">
              © 2023 ALL RIGHTS RESERVED
            </footer>
          </div>
        </div>
        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2">
          <div className="w-[50%] fixed top-10 right-10 bottom-10 rounded-lg">
            <img
              src="https://res.cloudinary.com/drkhwpadj/image/upload/v1724472038/A_Glass_of_Flowers_and_an_Orange_Twig_by_Abraham_Mignon_-_Hand_Painted_Oil_Painting_htwpzq.jpg"
              alt="Decorative Flower Image"
              className="h-[100%] w-[100%] rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
