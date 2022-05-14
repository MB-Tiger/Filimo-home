import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Filters = () => {
  const [isFilm, setIsFilm] = useState(false);
  const [isgenre, setIsgenre] = useState(false);
  const [isCountry, setIsCountry] = useState(false);
  const [islanguage, setIslanguage] = useState(false);
  const [isAge, setIsAge] = useState(false);
  // console.log(isFilm);
  const setOthersFalse = () => {
    return(
      setIsFilm(false),
      setIsgenre(false),
      setIsCountry(false),
      setIslanguage(false),
      setIsAge(false)
    )
  }
  return (
    <div className="w-full py-4 md:py-0 min-h-[65px] bg-[#323232] px-[30px] flex justify-between flex-wrap items-center">
      <div className="w-full md:w-[82%] md:flex md:items-center space-x-1 text-white text-xs font-medium cursor-pointer">
        <div
          className="w-full mb-4 md:mb-0 md:w-[16.5%] h-8 relative border rounded border-gray-500 flex items-center justify-between ml-1 p-2 hover:bg-gray-500 transition-all duration-300"
          onClick={() => {
            setOthersFalse()
            setIsFilm(!isFilm)}}
        >
          <span>فیلم و سریال</span>
          <MdKeyboardArrowDown className="text-base" />
          {isFilm === true ? (
            <div className="w-full absolute top-10 space-y-3 bg-[#010101] p-2 z-50 rounded filter-content">
              <div className="hover:text-yellow-500 transition-all duration-200">
                همه
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                فیلم
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                سریال
              </div>
            </div>
          ) : null}
        </div>
        <div
          className="w-full mb-4 md:mb-0 md:w-[16.5%] h-8 relative border rounded border-gray-500 flex items-center justify-between p-2 hover:bg-gray-500 transition-all duration-300"
          onClick={() => {
            setOthersFalse()
            setIsgenre(!isgenre)}}
        >
          <span>ژانر</span>
          <MdKeyboardArrowDown className="text-base" />
          {isgenre === true ? (
            <div className="flex justify-between absolute top-10 bg-[#010101] p-2 z-50 rounded filter-content">
              <div className="w-[140px] space-y-3">
                <div className="hover:text-yellow-500 transition-all duration-200">
                  همه
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  ناریخی | مذهبی
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  خانوادکی
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  کمدی
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  فیلم تئاتر
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  وحشت
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  فیلم کوتاه
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  کنسرت
                </div>
              </div>
              <div className="w-[140px] space-y-3">
                <div className="hover:text-yellow-500 transition-all duration-200">
                  اکشن
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  عاشقانه
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  مستند
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  انیمیشن
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  علمی تخیلی
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  تاک شو
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  دوبله ترکی
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div
          className="w-full mb-4 md:mb-0 md:w-[16.5%] h-8 relative border rounded border-gray-500 flex items-center justify-between p-2 hover:bg-gray-500 transition-all duration-300"
          onClick={() => {
            setOthersFalse()
            setIsCountry(!isCountry)}}
        >
          <span>کشور</span>
          <MdKeyboardArrowDown className="text-base" />
          {isCountry === true ? (
            <div className="flex justify-between absolute top-10 bg-[#010101] p-2 z-50 rounded filter-content">
              <div className="w-[105px] space-y-4">
                <div className="hover:text-yellow-500 transition-all duration-200">
                  همه
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  انگلیس
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  هند
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  چین
                </div>
              </div>
              <div className="w-[105px] space-y-4">
                <div className="hover:text-yellow-500 transition-all duration-200">
                  ایران
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  کره جنوبی
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  کانادا
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  ایتالیا
                </div>
              </div>
              <div className="w-[105px] space-y-4">
                <div className="hover:text-yellow-500 transition-all duration-200">
                  آمریکا
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  ترکیه
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  آلمان
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  خارجی
                </div>
              </div>
              <div className="w-[105px] space-y-4">
                <div className="hover:text-yellow-500 transition-all duration-200">
                  ژاپن
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  فرانسه
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  اسپانیا
                </div>
                <div className="hover:text-yellow-500 transition-all duration-200">
                  دیگر کشورها
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div
          className="w-full mb-4 md:mb-0 md:w-[16.5%] h-8 relative border rounded border-gray-500 flex items-center justify-between p-2 hover:bg-gray-500 transition-all duration-300"
          onClick={() => {
            setOthersFalse()
            setIslanguage(!islanguage)}}
        >
          <span>زبان</span>
          <MdKeyboardArrowDown className="text-base" />
          {islanguage === true ? (
            <div className="w-full absolute top-10 space-y-3 bg-[#010101] p-2 z-50 rounded filter-content">
              <div className="hover:text-yellow-500 transition-all duration-200">
                همه
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                فارسی(دوبله)
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                زبان اصلی(زیرنویس)
              </div>
            </div>
          ) : null}
        </div>
        <div
          className="w-full mb-4 md:mb-0 md:w-[16.5%] h-8 relative border rounded border-gray-500 flex items-center justify-between p-2 hover:bg-gray-500 transition-all duration-300"
          onClick={() => {
            setOthersFalse()
            setIsAge(!isAge)}}
        >
          <span>سن</span>
          <MdKeyboardArrowDown className="text-base" />
          {isAge === true ? (
            <div className="w-full absolute top-10 space-y-3 bg-[#010101] p-2 z-50 rounded filter-content">
              <div className="hover:text-yellow-500 transition-all duration-200">
                همه
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                زیر 3 سال
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                تا 6 سال
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                تا 12 سال
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                تا 15 سال
              </div>
              <div className="hover:text-yellow-500 transition-all duration-200">
                تا 18 سال
              </div>
            </div>
          ) : null}
        </div>
        <div className="w-full mb-4 md:mb-0 md:w-[16.5%] h-8 relative border rounded border-gray-500 flex items-center justify-between p-2 hover:bg-gray-500 transition-all duration-300">
          <span>HD</span>
          <input type="checkbox" />
        </div>
      </div>
      <button className="text-center w-full md:w-[16%] h-[38px] bg-[#FDC13C] hover:bg-[#FDB414] transition-all rounded">
        اعمال فیلتر
      </button>
    </div>
  );
};

export default Filters;
