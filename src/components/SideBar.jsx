//import React from 'react';
import { TbBrandGoogleHome } from "react-icons/tb";
import { MdOutlineQueueMusic, MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[96px] h-[100%] border-r border-[#D1D5DB] bg-[#FFFFFF] py-[10px] px-[12px] flex flex-col gap-[48px] items-center">
      <div className="w-[48px] h-[48px]">
        <img
          className="w-full h-full "
          src="https://octalogic.in/images/logos/O-Only.png"
          alt="logo"
        />
      </div>
      <div className="w-[72px] h-[116px] flex flex-col gap-[16px]">
        <Link to={"/dashboard"}>
          <div className=" bg-[#FEDFE1] w-[72px] h-[50px] rounded-[6px] py-[5px] px-[0px] flex flex-col items-center ">
            <TbBrandGoogleHome size={"24px"} color={"#972B7C"} />
            <div className="w-[33px] h-[16px]">
              <p className="font-nunitoSans text-[#901E75] text-[12px] font-[400] leading-[16.37px]">
                Home
              </p>
            </div>
          </div>
        </Link>
        <Link to={"/courses"}>
          <div className="bg-[#E5E7EB] w-[72px] h-[50px] rounded-[6px] py-[5px] px-[4px] flex flex-col items-center">
            <MdOutlineQueueMusic size={"24px"} color="#83858B" />
            <div className="w-[44px] h-[16px]">
              <p className="font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px]">
                Course
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="w-[72px] h-[744px] flex flex-col gap-[16px] justify-end">
        <div className="w-[72px] h-[50px] rounded-[6px] py-[5px] px-[0px] flex flex-col items-center">
          <MdOutlineLogout size={"24px"} color="#8B8D92" />
          <div className="w-[38px] h-[16px] ">
            <p className="font-nunitoSans text-[#83858B] text-[12px] font-[400] leading-[16.37px]">
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
