import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import { BiMoviePlay } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="w-full h-auto z-[999] sticky top-0 bg-[#151515]">
      <div className="w-full h-[2px] bg-yellow-400"></div>
      <div className="w-full h-[52px] flex justify-between items-center bg-black opacity-90 px-[30px]">
        <Link className="inline-block lg:hidden" to={"/"}>
          <img
            className="w-[80px]"
            src={require("../img/fa-filimo-dark-logo.png")}
            alt="Logo"
          />
        </Link>
        <ul className="hidden lg:flex items-center text-white space-x-7 py-[14px] text-sm">
          <li className="pl-7 border-l border-gray-500">
            <Link to={"/"}>
              <img
                className="w-[80px]"
                src={require("../img/fa-filimo-dark-logo.png")}
                alt="Logo"
              />
            </Link>
          </li>
          <li className="relative dropdown pr-[28px] py-[14px]">
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              <span>فیلم</span>
              <MdKeyboardArrowDown className="inline align-bottom" />
            </Link>
            <div className="absolute top-[50px] w-[350px] bg-[#151515] rounded hidden p-2 cursor-pointer shadow opacity-100 dropdown-content">
              <div className="flex">
                <div className="w-[175px] space-y-4">
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    اکشن
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    عاشقانه
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    مستند
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    انیمیشن
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    علمی تخیلی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    تاک شو
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    کنسرت
                  </p>
                </div>
                <div className="w-[175px] space-y-4">
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    تاریخی | مذهبی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    خانوادگی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    کمدی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    فیلم تئاتر
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    وحشت
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    فیلم کوتاه
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="relative dropdown py-[14px]">
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              <span>سریال</span>
              <MdKeyboardArrowDown className="inline align-bottom" />
            </Link>
            <div className="absolute top-[50px] w-[350px] bg-[#151515] rounded hidden p-2 cursor-pointer shadow opacity-100 dropdown-content">
              <div className="flex">
                <div className="w-[175px] space-y-4">
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    اکشن
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    عاشقانه
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    مستند
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    انیمیشن
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    علمی تخیلی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    تاک شو
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    کنسرت
                  </p>
                </div>
                <div className="w-[175px] space-y-4">
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    تاریخی | مذهبی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    خانوادگی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    کمدی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    فیلم تئاتر
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    وحشت
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    فیلم کوتاه
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              ایرانی
            </Link>
          </li>
          <li className="relative dropdown py-[14px]">
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              <span>مجموعه ها</span>
              <MdKeyboardArrowDown className="inline align-bottom" />
            </Link>
            <div className="absolute top-[50px] w-[350px] bg-[#151515] rounded hidden p-2 cursor-pointer shadow  opacity-100 dropdown-content">
              <div className="flex">
                <div className="w-[175px] space-y-4">
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    آموزش زبان انگلیسی
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    مخصوص ناشنوایان
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    مخصوصو نابینایان
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    جشنواره فجر
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    خلاصه فوتبال
                  </p>
                </div>
                <div className="w-[175px] space-y-4">
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    اسکار 2022
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    250 فیلم برتر Imdb
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    پرفروش ترینهای سینمای ایران
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    پیشکش
                  </p>
                  <p className="hover:text-yellow-500 transition-all duration-200">
                    همه لیست ها
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              کودک
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              فیلیمو مدرسه
            </Link>
          </li>
          <li>
            <Link
              className="flex items-end hover:text-yellow-500 transition-all"
              to={"/"}
            >
              <VscSearch className="ml-1" />
              <span>جستجو</span>
            </Link>
          </li>
        </ul>
        <div className="text-white text-sm">
          <button className="bg-[#1CB561] hover:bg-[#17924E] md:inline hidden transition-all duration-300 mx-1 px-4 py-2 rounded">
            <BiMoviePlay className="inline ml-1" />
            <span>خرید اشتراک فیلیمو</span>
          </button>
          <button className="bg-[#1CB561] hover:bg-[#17924E] md:hidden inline transition-all duration-300 mx-1 px-4 py-2 rounded">
            <span>خرید اشتراک</span>
          </button>
          <button className="bg-[#56574E] hover:bg-[#5F6059] transition-all duration-300 px-4 py-2 rounded">
            ورود
          </button>
        </div>
      </div>
      <div className="w-full h-[42px] lg:hidden bg-black opacity-90 px-[30px] overflow-x-scroll">
        <ul className="flex items-center text-white space-x-7 text-sm">
          <li className="ml-7">
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              <span>فیلم</span>
              <MdKeyboardArrowDown className="inline align-bottom" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              <span>سریال</span>
              <MdKeyboardArrowDown className="inline align-bottom" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              ایرانی
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              <span>مجموعه ها</span>
              <MdKeyboardArrowDown className="inline align-bottom" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              کودک
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500 transition-all" to={"/"}>
              فیلیمو مدرسه
            </Link>
          </li>
          <li>
            <Link
              className="flex items-end hover:text-yellow-500 transition-all"
              to={"/"}
            >
              <VscSearch className="ml-1" />
              <span>جستجو</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
