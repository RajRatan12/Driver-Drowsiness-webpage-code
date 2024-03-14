import React from "react";
import background from "./Images/Bg.jpg";

const About = () => {
  return (
    <div>
      <div className="m-0 p-0 w-[100%] h-[100vh] ">
        <img src={background} className="w-[100%] h-[100%] object-cover"></img>{" "}
      </div>{" "}
      <div className="absolute top-0 max-w-[1100px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
        {/* Left Side */}
        <div className="grid grid-cols-2 h-[80vh] w-[80vh] grid-rows-3">
          <img
            className="row-span-2 p-2 w-full h-full object-cover"
            src="https://www.wilmarinc.com/hubfs/PicUploads/AdobeStock_68848712.jpeg"
            alt="/"
          />
          <img
            className=" w-full h-full p-2 object-cover"
            src="https://images.pexels.com/photos/4477291/pexels-photo-4477291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="/"
          />
          <img
            className="row-span-2 p-2 w-full h-full object-cover"
            src="https://img.freepik.com/premium-vector/accident-drunk-driver-poster-driving-intoxicated-flat-vector-illustration_124715-1775.jpg"
            alt="/"
          />
          <img
            className="row-span-2 w-full p-2 h-full object-cover"
            src="https://pbs.twimg.com/media/FL33gT5XEAE53E1.jpg"
            alt="/"
          />
          <img
            className="w-full h-full p-2 object-cover"
            src="https://images.indianexpress.com/2022/08/traffic-delhi-1.jpg"
            alt="/"
          />
        </div>

        {/* Right Side */}

        <div className="flex flex-col justify-center">
          <h3 className="font-bold text-lightgreen text-5xl md:text-5xl font-StyleScript w-full">
            Transportation and Logistics
          </h3>
          <p className="text-xl py-5 text-offgreen font-Sofia">
            Welcome to [Project/Organization Name], where safety meets
            innovation in the world of transportation. We are committed to
            revolutionizing driver safety through cutting-edge technology and
            solutions.
          </p>
          <h3 className="font-bold text-lightgreen text-2xl md:text-2xl font-StyleScript w-full">
            Mission
          </h3>
          <p className="text-xl py-6 text-offgreen font-Sofia">
            Our mission is to enhance driver safety and reduce accidents on the
            road by leveraging advanced technology. We aim to address critical
            issues such as dress code violations, theft prevention, driver
            identification, and alcohol detection, ultimately making
            transportation safer and more secure.
          </p>
          <h3 className="font-bold text-lightgreen text-2xl md:text-2xl font-StyleScript w-full">
            Vision
          </h3>
          <p className="text-xl py-6 text-offgreen font-Sofia">
            Our vision is a world where every journey is safe, secure, and
            stress-free. We see a future where our technology is at the
            forefront of driver safety, setting new industry standards and
            saving lives on the road.
          </p>
          {/* <div>
            <button className="border-2 border-black p-2 rounded-xl hover:shadow-xl mr-4">
              Learn More
            </button>
            <button className="border-2 border-black bg-black text-white p-2 rounded-xl hover:shadow-xl">
              Book Your Trip
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
