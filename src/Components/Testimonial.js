import React from "react";
// import ProfilePic from "../Assets/john-doe-image.png";
// import { AiFillStar } from "react-icons/ai";
// import { ElfsightWidget } from "react-elfsight-widget";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimonial = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay={true}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={30}
      showThumbs={false}
    >
      <div>
        <img
          src="https://res.cloudinary.com/dhhiphscp/image/upload/fl_preserve_transparency/v1715052656/plantshop/IMG_3031_5ef0b1b198_ygokub.jpg?_s=public-apps"
          alt="succulent"
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dhhiphscp/image/upload/fl_preserve_transparency/v1703032015/plantshop/medium_IMG_3015_338c0ec92d_dc6f0e0eb9.jpg?_s=public-apps"
          alt="succulent"
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dhhiphscp/image/upload/fl_preserve_transparency/v1715052656/plantshop/IMG_3036_15264da140_sl7mfs.jpg?_s=public-apps"
          alt="succulent"
        />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dhhiphscp/image/upload/fl_preserve_transparency/v1715052657/plantshop/IMG_3117_592e37ed55_bclgg8.jpg?_s=public-apps"
          alt="succulent"
        />
        <p className="legend">Legend 4</p>
      </div>

      <div>
        <img
          src="https://res.cloudinary.com/dhhiphscp/image/upload/fl_preserve_transparency/v1703028912/plantshop/medium_IMG_3013_a989eb6a7b_3ae0dd928a.jpg?_s=public-apps"
          alt="succulent"
        />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dhhiphscp/image/upload/fl_preserve_transparency/v1715052655/plantshop/IMG_3119_0d6ce33aef_oaq87i.jpg?_s=public-apps"
          alt="succulent"
        />
        <p className="legend">Legend 5</p>
      </div>
    </Carousel>
  );
};

export default Testimonial;
