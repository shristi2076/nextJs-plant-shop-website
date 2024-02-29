"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import Image, { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
      className={` flex flex-col items-center gap-5 transform ${
        isActive ? "scale-100" : "scale-50"
      } transition-transform duration-300 opacity-${isActive ? 100 : 50}`}
      key={image.id}
    >
      <div className="w-80 mx-auto">
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={900}
          className="w-full h-full object-cover"
        />
      </div>

      {!isActive && (
        <div className={`flex items-center justify-around gap-5 lg:gap-5 `}>
          <div className={`flex flex-col `}>
            <div className="md:text-xl xl:text-2xl font-bold text-white">
              {image.title}
            </div>
            <div className="md:text-xl xl:text-2xl font-bold text-white">
              {image.price}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Carousel = ({ images }: CarouselProps) => {
  const NextArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div className="arrow next hidden" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    );
  };
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
      <div className="arrow prev hidden" onClick={onClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    speed: 300,
    autoPlaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    slick: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: any, next: React.SetStateAction<number>) =>
      setImageIndex(next),
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
    <div>
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
      <div
        className={`flex items-center justify-around gap-5 lg:gap-5 absolute bottom-[-35px] left-1/2 transform -translate-x-1/2  p-2 rounded-3xl bg-opacity-[0.5] bg-slate-200`}
      >
        <div className={`flex flex-col`}>
          <div className="md:text-[21px] xl:text-2xl font-bold">
            {images[imageIndex].title}
          </div>
          <div className="md:text-[21px] xl:text-2xl font-bold">
            {images[imageIndex].price}
          </div>
        </div>
        <div className="flex">
          <Link
            className="bg-blue-500 flex self-center xl:text-xl text-white py-2 px-4 rounded-2xl mt-4 hover:bg-blue-600"
            href="/cart"
          >
            + Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
