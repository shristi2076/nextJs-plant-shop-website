"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface CarouselProps {
  images: {
    src: StaticImageData;
    alt: string;
    id: number;
    title: string;
    price: string;
  }[];
}

interface SlideProps {
  image: {
    src: StaticImageData;
    alt: string;
    id: number;
    title: string;
    price: string;
  };
  imageIndex: number;
  isActive: boolean;
}

const Slide = ({ image, imageIndex, isActive }: SlideProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-5 md:py-5 lg:py-8 transform ${
        isActive ? "scale-100" : "scale-50"
      } transition-transform duration-300 opacity-${isActive ? 100 : 50}`}
      key={image.id}
    >
      <div className="w-80 mx-auto">
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className={`flex items-center justify-around gap-5 lg:gap-5 ${
          isActive ? " bg-slate-300 rounded-3xl py-3 w-fit lg:w-[105%]" : ""
        } `}
      >
        <div className={`flex flex-col ${isActive ? "" : "text-center"}`}>
          <div className="text-[21px] xl:text-2xl font-bold">{image.title}</div>
          <div className="text-[22px] xl:text-2xl font-bold">{image.price}</div>
        </div>
        {isActive && (
          <div className="flex">
            <button className="bg-blue-500 flex self-center xl:text-xl text-white py-2 px-4 rounded-2xl mt-4 hover:bg-blue-600">
              + Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Carousel = ({ images }: CarouselProps) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next hidden" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev hidden" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((img, idx) => (
        <Slide
          image={img}
          imageIndex={imageIndex}
          key={img.id}
          isActive={idx === imageIndex}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
