import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// JSON array for card data
const cardData = [
  {
    image: "./first.svg",
    name: "James Thompson",
    location: "Austin, TX",
    testimonial:
      "Winning this video contest has been an incredible experience! I never imagined that my video would resonate with so many people. The competition was tough, with so many talented creators submitting amazing work, but I'm thrilled to have been recognized. Thank you to everyone who voted and supported me throughout this journey!",
  },
  {
    image: "./second.svg",
    name: "Emily Rivera",
    location: "Los Angeles, CA",
    testimonial:
      "I’m beyond excited to have won this contest! It was such a fun project to work on, and I’m so grateful for the opportunity to share my passion with a wider audience. Winning has given me a huge confidence boost and the motivation to keep pursuing my dreams in video production. A big thank you to the organizers and everyone who believed in me!",
  },
  {
    image: "./third.svg",
    name: "Sarah Mitchell",
    location: "Chicago, IL",
    testimonial:
      "Participating in this contest was an amazing challenge, and winning feels surreal. I put a lot of effort into creating something unique and meaningful, and to have that effort recognized is truly rewarding. This victory has opened up new doors for me, and I’m excited to see where this journey takes me next. Thanks to all who made ...",
  },
  {
    image: "./first.svg",
    name: "Liam O'Connor",
    location: "Boston, MA",
    testimonial:
      "This contest pushed me out of my comfort zone, and I'm so glad I participated. Winning has given me confidence and new opportunities. The experience has been invaluable, and I'm excited to keep growing in this space.",
  },
  {
    image: "./second.svg",
    name: "Sophia Martinez",
    location: "Miami, FL",
    testimonial:
      "Winning this competition feels like a dream come true. It gave me the platform to express my creativity and be acknowledged for it. I'm grateful for the support and encouragement from everyone involved!",
  },
];

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h1 className="text-white text-4xl pb-4 ">Testimonials</h1>
      <Slider
        {...settings}
        className="overflow-x-hidden text-white  overflow-y-hidden  max-w-[1150px]"
      >
        {cardData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="bg-gradient-to-t to-[#141E33] from-[#111322]  min-h-[532px] shadow-md rounded-lg p-6 w-[350px] transition-transform transform hover:scale-105">
              <img
                src={card.image}
                alt={card.name}
                className="w-[52px] h-[52px] object-cover rounded-md mb-4"
              />
              <h3 className="text-md  font-bold text-[#A0A3AA] text-left">
                {card.name}
              </h3>
              <h4 className="text-md text-[#A0A3AA] text-left">
                {card.location}
              </h4>
              <p className="mt-6 text-[#E0E0E2] leading-7 text-left">
                "{card.testimonial}"
              </p>
            </div>
          </div>
        ))}
      </Slider >
    </div>
  );
};

export default CardSlider;
