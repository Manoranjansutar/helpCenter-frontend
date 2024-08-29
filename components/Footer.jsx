import React from "react";

const Footer = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      <div className="flex flex-col items-center justify-center gap-5 px-5 pt-10 mx-auto md:px-10 md:flex-row md:items-start">
        <div className="flex flex-col text-white w-[250px]">
          <h1 className="text-2xl">Help Center</h1>
          <p className="text-[#aeaeae]">Branches</p>
        </div>
        <div className="flex flex-col text-white  w-[250px]">
          <h1 className="text-2xl">Resources</h1>
          <p className="text-[#aeaeae]">Blog</p>
          <p className="text-[#aeaeae]">help Center</p>
          <p className="text-[#aeaeae]">Release Notes</p>
          <p className="text-[#aeaeae]">Status</p>
        </div>
        <div className="flex flex-col text-white  w-[250px]">
          <h1 className="text-2xl">Community</h1>
          <p className="text-[#aeaeae]">Twitter</p>
          <p className="text-[#aeaeae]">LinkedIn</p>
          <p className="text-[#aeaeae]">Facebook</p>
          <p className="text-[#aeaeae]">Dribble</p>
          <p className="text-[#aeaeae]">Podcast</p>
        </div>
        <div className="flex flex-col text-white  w-[250px]">
          <h1 className="text-2xl">Company</h1>
          <p className="text-[#aeaeae]">About Us</p>
          <p className="text-[#aeaeae]">Carrer</p>
          <p className="text-[#aeaeae]">Our Team</p>
          <p className="text-[#aeaeae]">Terms of Service</p>
          <p className="text-[#aeaeae]">Privacy</p>
          <p className="text-xl">Contact Us</p>
          <p className="text-[#aeaeae]">info@helpdesk.com</p>
        </div>
      </div>
      <p className="text-[#aeaeae] text-center mb-10">
        © 2022 HelpDesk . All rights reserved
      </p>
    </div>
  );
};

export default Footer;
