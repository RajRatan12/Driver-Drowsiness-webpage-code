import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import videoBG from "./Videos/pexels_videos_1394254 (1440p).mp4";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [driverId, setDriverId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const signinButtonHandler = () => {
    if (
      email === "transportation@gmail.com" &&
      password === "transportation" &&
      driverId === "10"
    ) {
      setMessage("Success!");
      navigate("/Buttons");
    } else {
      setMessage("Please enter the details correctly!");
    }
    console.log(message);
  };

  const EmailchangeHandler = (event) => {
    const value = event.target.value;
    setEmail(value);
    console.log(value);
  };

  const DriverIdchangeHandler = (event) => {
    const value = event.target.value;
    setDriverId(value);
    console.log(value);
  };

  const setPasswordchangeHandler = (event) => {
    const value = event.target.value;
    setPassword(value);
    console.log(value);
  };

  function submitHandler(event) {
    event.preventDefault();
    // {
    //   message === "Success!" ? setIsLoggedIn(true) : setIsLoggedIn(false);
    // }
    // // toast.success("Logged In");
    console.log("Printing the formData ");
    // navigate("/dashboard");
    console.log(message);
  }

  return (
    <div className="">
      <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black/40">
        {" "}
      </div>{" "}
      <div className="m-0 p-0 w-[100%] h-[100vh]">
        <video
          src={videoBG}
          autoPlay
          loop
          muted
          className="w-[100%] h-[100%] object-cover"
        ></video>{" "}
      </div>{" "}
      <div className="top-0 absolute w-[100%] h-[100%] flex-col flex justify-center overflow-hidden">
        <div className="absolute p-10  text-black m-auto md:w-[500px]">
          <button className="font-mono relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
            Driver
          </button>
          <button className="font-mono ml-8 relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
            Owner
          </button>
          <form
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6 relative"
          >
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] text-white font-Montagu">
                Email Address <sup className="text-black-600"> * </sup>{" "}
              </p>{" "}
              <input
                required
                type="text"
                value={email}
                onChange={EmailchangeHandler}
                placeholder="Enter email address"
                name="email"
                className="font-Montagu bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
            </label>{" "}
            <label className="w-full">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] text-white font-Montagu">
                Driver ID <sup className="text-black-600"> * </sup>{" "}
              </p>{" "}
              <input
                required
                type="text"
                value={driverId}
                onChange={DriverIdchangeHandler}
                placeholder="Enter id"
                name="id"
                className="font-Montagu bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
            </label>{" "}
            <label className="w-full relative">
              <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] text-white font-Montagu">
                Password <sup className="text-pink-200"> * </sup>{" "}
              </p>{" "}
              <input
                required
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={setPasswordchangeHandler}
                placeholder="Enter Password"
                name="password"
                className="font-Montagu bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
              <span
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {" "}
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}{" "}
              </span>{" "}
              {/* <Link to="#">
              <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                Forgot Password{" "}
              </p>{" "}
            </Link>{" "} */}
            </label>{" "}
            <button
              className=" m-auto bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 md:w-[200px]"
              onClick={signinButtonHandler}
            >
              Sign In{" "}
            </button>{" "}
            {/* {setIsLoggedIn === "False" ? (
            <div>
              <p> Login {message} </p>{" "}
            </div>
          ) : (
            <div>
              <p> Login {message} </p>{" "}
            </div>
          )}{" "} */}
            {message ? (
              <div className="flex justify-center text-2xl text-white">
                <p>{message}</p>
              </div>
            ) : (
              <div className="flex justify-center text-2xl text-white">
                <p>{message}</p>
              </div>
            )}
          </form>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default LoginPage;
