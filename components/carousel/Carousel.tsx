import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";

type ChildrenProps = {
  children: React.ReactNode;
};

const settings = {
  dots: true,
  arrows: true,
  // fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
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

export default function CaptionCarousel({ children }: ChildrenProps) {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  return (
    <Box
      mb="1"
      position={"relative"}
      height={"fit-content"}
      width={"full"}
      bg="#F3F9FD"
      borderRadius="20px"
      overflow={"hidden"}
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      px="2"
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {children}
      </Slider>
    </Box>
  );
}
