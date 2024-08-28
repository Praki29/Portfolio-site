// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Full Stack Development",
    description: "Created web applications using HTML, CSS, and JavaScript.",
  },
  {
    icon: <RxRocket />,
    title: "Data Science",
    description:
      "Analyzed metrics for Large Language Models, optimizing data storage and retrieval processes.",
  },
  {
    icon: <RxPencil2 />,
    title: "Machine Learning",
    description:
      "Built face and voice authentication systems using Flask and CNN models for security.",
  },
  {
    icon: <RxReader />,
    title: "Cloud Solutions",
    description:
      "Deployed applications on AWS and Google Cloud, managing for scalability.",
  },
  {
    icon: <RxCrop />,
    title: "Project Management",
    description:
      "Led projects like Folio and Sankalp, focusing on user-centric design and functionality.",
  },
];

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icons */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title and disc */}
              <div>
                <div>{item.title}</div>
                <p>{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
