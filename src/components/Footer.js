import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { SiAparat } from "react-icons/si";
import { FiMonitor } from "react-icons/fi";
import { BsTwitter, BsTelegram, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="w-full h-7 bg-[#191919] text-gray-400 px-2 text-xs sticky bottom-0 flex justify-between">
      <div className="flex items-center space-x-5">
        <span className="pl-5 flex items-center">
          <FiMonitor className="text-base ml-1" />
          <span>تماشا با تلویزیون</span>
        </span>
        <span>اپلیکیشن ها</span>
        <span className="md:inline-block hidden">تماس با ما</span>
        <span className="md:inline-block hidden">قوانین</span>
        <span className="md:inline-block hidden">پرسش های متداول</span>
        <span className="md:inline-block hidden">به ما بپیوندید</span>
        <span className="md:inline-block hidden">تبلیغات در فیلیمو</span>
        <span className="cursor-pointer md:inline hidden relative dropdown">
          <span className="hover:text-white transition-all">
            <TiArrowSortedDown className="text-base inline ml-1" />
            <span>سایر لینک ها</span>
          </span>
          <div className="absolute bottom-[21px] w-[150px] bg-[#151515] rounded hidden p-2 cursor-pointer shadow dropdown-content">
            <p className="w-[150px] py-2 hover:bg-gray-500 hover:text-white transition-all">
              لوگو
            </p>
            <p className="w-[150px] py-2 hover:bg-gray-500 hover:text-white transition-all">
              دانلود فیلم و سریال
            </p>
          </div>
        </span>
        <span className="md:hidden flex items-center cursor-pointer">
          <span className="hover:text-white transition-all">
            <TiArrowSortedDown className="text-base inline-block ml-1" />
            <span>لینک های مفید</span>
          </span>
        </span>
      </div>
      <div className="md:flex hidden items-center cursor-pointer relative dropdown">
        <span className="hover:text-white transition-all">
          <TiArrowSortedDown className="text-base inline-block ml-1" />
          <span>شبکه های اجتماعی</span>
        </span>
        <div className="absolute bottom-[25px] w-[110px] bg-[#151515] rounded hidden p-2 cursor-pointer shadow dropdown-content">
          <p className="w-[110px] py-2 hover:bg-gray-500 hover:text-white transition-all flex items-center">
            <SiAparat className="ml-2 text-base" />
            <span>آپارات</span>
          </p>
          <p className="w-[110px] py-2 hover:bg-gray-500 hover:text-white transition-all flex items-center">
            <BsTelegram className="ml-2 text-base" />
            <span>تلگرام</span>
          </p>
          <p className="w-[110px] py-2 hover:bg-gray-500 hover:text-white transition-all flex items-center">
            <BsTwitter className="ml-2 text-base" />
            <span>توئیتر</span>
          </p>
          <p className="w-[110px] py-2 hover:bg-gray-500 hover:text-white transition-all flex items-center">
            <BsInstagram className="ml-2 text-base" />
            <span>اینستاگرام</span>
          </p>
        </div>
      </div>
      <div className="flex md:hidden items-center cursor-pointer">:</div>
    </div>
  );
};

export default Footer;
