import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/src/images/flight1.png",
    span: "ADMISSION",
    title: "Enjoy a hassle free process with our study abroad packages.",
    buttonText: "Learn now",
    link: "/admission",
  },
  {
    image: "/src/images/explore.png",
    span: "TOURIST VISA",
    title:
      "Explore the world when you apply for your visit visa with 85% success rate.",
    buttonText: "Apply Now",
    link: "/tourist-visa",
  },
  {
    image: "/src/images/canada.png",
    span: "RELOCATION SERVICE",
    title: "Live and Work in Canada legally with your family",
    buttonText: "Start now",
    link: "/relocation-service",
  },
  {
    image: "/src/images/flight.png",
    span: "FLIGHT SERVICE",
    title: "Enjoy the best deals on local and International flights",
    buttonText: "Plan Trip",
    link: "/flight-service",
  },
  {
    image: "/src/images/adventure.png",
    span: "TOUR SERVICE",
    title:
      "Take a break from the stress and let's treat you to an adventure to remember",
    buttonText: "Plan Trip",
    link: "/tour-service",
  },
  {
    image: "/src/images/group.png",
    span: "TEAM BONDING PACKAGE",
    title:
      "Take a break from work and bond with colleagues locally or internationally",
    buttonText: "Grab Deal",
    link: "/team-bonding-package",
  },
  {
    image: "/src/images/care.png",
    span: "MATERNITY SERVICE",
    title:
      "Birth abroad made easy with us. Get the best deals on medical bills and give your child the gift of dual citizenship.",
    buttonText: "Check Offers",
    link: "/maternity-service",
  },
];

const ImageSlider = () => {
  return (
    <div className="relative w-full h-full z-10">
      <div className="">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000 }}
          loop={true}
          className="w-full h-full sm:h-[600px] relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative  w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-screen object-cover"
                />
                <div className="absolute inset-0 top-[50vh] sm:top-[20vh] md:top-[50vh] lg:top-[40vh] flex flex-col justify-center items-start px-10 mx-auto max-w-7xl sm:px-6 lg:px-8 transform -translate-y-1/2">
                  <p className="text-red-100 text-sm font-bold  uppercase tracking-wide">
                    {slide.span}
                  </p>
                  <h2 className="text-white text-3xl font-bold max-w-lg pt-4">
                    {slide.title}
                  </h2>
                  <button className="mt-4 px-8 py-3  bg-red-500 text-white rounded-4xl hover:bg-red-500">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
