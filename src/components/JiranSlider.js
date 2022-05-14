import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const jiranSlider = () => {
  const images = [{ url: require("../img/jiran1.jpg") }, { url: require("../img/jiran2.jpg") }];
  return (
    <div>
      <SimpleImageSlider
        width={1520}
        height={330}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default jiranSlider;
