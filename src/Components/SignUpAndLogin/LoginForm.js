import { useState, useContext } from "react";
import { BiShowAlt, BiHide } from "react-icons/bi";
import Link from "next/link";
import { UserContext } from "../../Context/UserContext";
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit
  } = useForm();

  const [passwordShown, setPasswordShown] = useState(false);
  const [errorShown, setErrorShown] = useState(false);
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (data) => {
    const isAuth = await login(data);
    if (!isAuth) {
      setErrorShown(true);
    }
  }

  return (
    <div className="flex justify-center py-20">
      <div className="w-[90%]">
        <div className="flex justify-center antialiased w-full">
          <form
              onSubmit={handleSubmit(onSubmit)}
            className="w-full px-20 bg-white pt-16 pb-16 mb-4 border-2 rounded-lg  shadow-md md:w-full lg:w-5/6 xl:w-3/5"
          >
            <h3 className="text-center text-black text-3xl md:text-3xl mb-7 font-semibold ">
              Login into your account
            </h3>
            {errorShown && <div  className="bg-[#fdc0c0] border-2 border-[red] w-full flex justify-center py-2 rounded-md mb-6">
              <p>Invalid credentials</p>
            </div>}
            <div className="mb-4 relative">
              <input
                //   {...register("email", { required: "email is required" })}
                // type={passwordShown ? "text" : "email"}
                placeholder=" "
                {...register('email')}
                className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
              />
              <label
                className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor="password"
              >
                Email
              </label>
              {/* {errors.email && (
              <p className="text-red-500 text-xs ">{errors.email.message}</p>
            )} */}
            </div>

            <div className="mb-4 relative">
              <input
                //   {...register("password", { required: "Password is required" })}
                type={passwordShown ? "text" : "password"}
                placeholder=" "
                {...register('password')}
                className="block rounded-t-lg px-2.5 pb-3.5 pt-5 w-full text-md text-black border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-green peer"
              />
              <label
                className="absolute text-md text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 z-10 origin-[0] left-2.5 peer-focus:text-[#243C74] peer-focus:font-bold peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor="password"
              >
                Password
              </label>
              <button
                onClick={togglePassword}
                className="absolute h-[40px] inset-y-0 z-0 right-4 top-2 flex items-center text-sm border-0 border-b-2 peer-focus:border-green"
              >
                {passwordShown ? <BiShowAlt /> : <BiHide />}
                {/* {passwordShown ? "Hide password" : "Show Password"} */}
              </button>
              {/* {errors.password && (
              <p className="text-red-500 text-xs ">{errors.password.message}</p>
            )} */}
            </div>
            <button className="bg-[#243C74] focus:shadow-outline focus:outline-none hover:bg-[#2b4583] mt-10 text-white font-bold px-6 md:text-lg rounded-md w-full mb-3 py-2">
              {/* {loading ? "Sending" : "Login"} */} Login
            </button>
            <Link href="/signup" className="pt-2">
              <h3>
                Dont have an Account?{" "}
                <span className="text-[#243C74] underline font-bold cursor-pointer">
                  Register
                </span>
              </h3>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;