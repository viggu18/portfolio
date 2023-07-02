import React from "react";
import { PhoneAndroid, Mail } from "@mui/icons-material";

const ContactMe = () => {
  return (
    <div className="w-full" id="getintouch">
      <h1 className="text-xl my-1">Get In Touch</h1>
      <div className="flex flex-col justify-center items-center w-full">
        <p className="xl:text-xl lg:text-xl md:text-xl font-bold sm:text-md my-3">
          I'd love to hear from you
        </p>
        <p className="font-medium my-3 xl:text-sm lg:text-sm md:text-sm sm:text-xs xs:text-xs text-gray-500 xl:w-[400px] lg:w-[400px] md:w-[400px] sm:w-[80%] xs:w-[80%] text-center">
          I'm always learning and growing, and I'm always looking for new ways
          to connect with people. If you have a question, a challenge, or an
          idea, I'd love to hear from you. Let's connect and see how we can work
          together.
        </p>
      </div>
      <div className="flex xl:flex-row lg:flex-row md:flex-row justify-center items-center gap-3 m-3 text-sm text-[#807f7f] sm:flex-col xs:flex-col">
        <span className="flex items-center">
          <PhoneAndroid /> <a href="tel:+919481945297">+91 9481945297</a>
        </span>
        <span className="flex items-center">
          <Mail />
          <a href="mailto:nayakvignesh18@gmail.com">nayakvignesh18@gmail.com</a>
        </span>
      </div>
    </div>
  );
};

export default ContactMe;
