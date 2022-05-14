import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MoviesSlider = (props) => {
  const { movies } = props;
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 6,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 4,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      {/* <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className="w-full"
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {movies.length ? (
          movies.map((movie, i) => {
            return (
              <div key={i} className="text-white mx-4">
                <img src={require("../img/sakht-iran.jpg")} alt="" />
                <p>{movie.caption}</p>
              </div>
            );
          })
        ) : (
          <div className="animate-spin w-16 h-16 m-16 rounded-full border-[10px] border-transparent border-b-[10px] border-b-red-800"></div>
        )}
      </Carousel> */}
      <div className="flex flex-wrap container justify-evenly items-center">
        {movies.length ? (
          movies.map((movie, i) => {
            return (
              <div key={i} className="text-white mx-4 w-[200px] mb-6">
                <img className="w-[200px] rounded" src={require("../img/sakht-iran.jpg")} alt="" />
                <p className="mt-2">{movie.caption}</p>
              </div>
            );
          })
        ) : (
          <div className="animate-spin w-16 h-16 m-16 rounded-full border-[10px] border-transparent border-b-[10px] border-b-red-800"></div>
        )}
      </div>
    </>
  );
};

export default MoviesSlider;
