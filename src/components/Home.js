import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import MoviesSlider from "./MoviesSlider";
import { BsFillPlayFill } from "react-icons/bs";
import useTitle from "../hooks/useTitle"
const Home = () => {
  const [movies, setMovies] = useState([]);
  useTitle("Filimo")
  console.log(movies);
  useEffect(() => {
    fetch("https://www.namava.ir/api/v1.0/post-groups/1265/medias?pi=1&ps=20")
      .then((response) => response.json())
      .then((json) => setMovies(json.result));
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#151515] py-7">
      <Filters />
      <div className="w-full h-[330px] my-7 flex items-center px-14 sakhtIran-cover bg-cover">
        <div className="w-[195px] relative overflow-hidden rounded card-img cursor-pointer">
          <img
            className="w-full"
            src={require("../img/sakht-iran.jpg")}
            alt="sakht-iran-poster"
          />
          <div className="w-full h-full hidden bg-black opacity-60 absolute top-0 z-50 card-img-cover"></div>
        </div>
        <div className="text-white mr-10 max-w-[600px]">
          <h3 className="font-bold">ساخت ایران 3 - قسمت 6</h3>
          <div className="text-xs font-medium mb-4">کمدی | خانوادگی</div>
          <div className="text-xs font-medium mb-2">
            ایران - 1400 - کیفیت HD
          </div>
          <div className="text-xs font-medium mb-2 sm:block hidden">
            کارگردان: بهمن گودرزی
          </div>
          <p className="text-xs font-medium mb-3 lg:block hidden">
            غلام و مرتضی بدون اینکه بدانند ماموریتشان با شکست رو به رو شده، می
            خواهند سهمشان را از سیاوش بگیرند، اما او را پیدا نمی کنند. مسابقه
            اسب دوانی لغو شده و آن هایی که روی مسابقه شرط بندی کرده بوده اند،
            پولشان را می خواهند. پول های شرط بندی وارد حساب های بانکی غلام و
            مرتضی شده بوده است...
          </p>
          <button className="py-2 px-4 bg-gray-200 hover:bg-gray-300 transition-all duration-200 text-black rounded">
            <BsFillPlayFill className="inline text-xl" />
            <span className="text-sm">اطلاعات فیلم</span>
          </button>
        </div>
      </div>
      <div className="w-full px-[30px] flex items-center space-x-2 pb-7 xl:overflow-x-auto overflow-x-scroll">
        <img
          className="w-[356px] h-[200px] ml-2 rounded"
          src={require("../img/D60.jpg")}
          alt=""
        />
        <img
          className="w-[356px] h-[200px] ml-2 rounded"
          src={require("../img/D70.jpg")}
          alt=""
        />
        <img
          className="w-[356px] h-[200px] ml-2 rounded"
          src={require("../img/D80.jpg")}
          alt=""
        />
        <img
          className="w-[356px] h-[200px] ml-2 rounded"
          src={require("../img/D90.jpg")}
          alt=""
        />
      </div>
      <div className="w-full h-[330px] bg-[#222222] flex items-center my-7 px-14">
        <div className="w-[195px] relative overflow-hidden rounded card-img cursor-pointer">
          <img
            className="w-full"
            src={require("../img/jiran.jpg")}
            alt="sakht-iran-poster"
          />
          <div className="w-full h-full hidden bg-black opacity-60 absolute top-0 z-50 card-img-cover"></div>
        </div>
        <div className="text-white mr-10 max-w-[600px]">
          <h3 className="font-bold">جیران - فصل 1 قسمت 8</h3>
          <div className="text-xs font-medium mb-4">عاشقانه | خانوادگی</div>
          <div className="text-xs font-medium mb-2">
            ایران - 1400 - کیفیت HD
          </div>
          <div className="text-xs font-medium mb-2 sm:block hidden">
            کارگردان: حسن فتحی
          </div>
          <p className="text-xs font-medium mb-3 lg:block hidden">
            صدراعظم برای محکم تر کردن جایگاهش به فکر این است که ملک زاده را برای
            پسرش میرزا کاظم خواستگاری کند. سیاوش هم به قراول خانه بر می گردد و
            قرار است جزو ملازمان شاه به شکار بروند. جیران که به این موضوع پی می
            برد نگران می شود. آیا سیاوش نقشه ای دارد؟…
          </p>
          <button className="py-2 px-4 bg-gray-200 hover:bg-gray-300 transition-all duration-200 text-black rounded">
            <BsFillPlayFill className="inline text-xl" />
            <span className="text-sm">اطلاعات فیلم</span>
          </button>
        </div>
      </div>
      <MoviesSlider movies={movies} />
    </div>
  );
};

export default Home;
