import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
type ChildrenProps = {
  slideToShow?: number;
  children: React.ReactNode;
  minShow?: number;
  showDot?: boolean;
  slideInMid?: number;
};

const Responsive = ({
  slideToShow,
  minShow,
  slideInMid,
  children,
}: ChildrenProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: slideToShow || 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slideInMid || 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slideInMid || 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: minShow || 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ width: "95%" }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Responsive;
