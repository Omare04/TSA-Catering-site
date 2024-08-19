"use client";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../ui/card-carousel";
import { SocialIcon } from "react-social-icons";

export function MenuSection() {

  // Make a contact button for smaller screen and do the menu section

  return (
    <div className="w-full flex phone-screen:flex-col md:flex-row gap-10 py-3 h-full">
      <MenuCarousel />
      <MenuText />
    </div>
  );
}

const MenuCarousel = () => {
  return (
    <div className="md:w-1/3 phone-screen:w-full">
      <Carousel>
        <CarouselContent className="">
          {carouselData.map((card, index) => (
            <CarouselItem key={index}>
              <Card key={card.src} card={card} index={index} layout={true} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />
      </Carousel>
    </div>
  );
};

const MenuText = () => {
  return (
    <div className="flex gap-5 pt-10 justify-start text-base font-normal text-neutral-600 dark:text-neutral-400 w-full pl-7 h-full flex-wrap">
      <div className="flex gap-5 ">
        <div className="flex flex-col gap-9">
          <div>
            <h2 className="text-2xl font-bold">Appetizers</h2>
            <p>
              Start with our delicious canapés and fresh salads, perfect for any
              palate.
            </p>
            <ul>
              <li>
                <strong>Gourmet Canapés:</strong> Bite-sized treats with smoked
                salmon, brie, and more.
              </li>
              <li>
                <strong>Fresh Salads:</strong> Crisp salads with a variety of
                toppings and dressings.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Main Courses</h2>
            <p>Satisfy your guests with our diverse main course options.</p>
            <ul>
              <li>
                <strong>Succulent Meats:</strong> Slow-roasted beef,
                herb-crusted lamb, and juicy chicken.
              </li>
              <li>
                <strong>Seafood Delights:</strong> Grilled salmon, shrimp
                scampi, and seared scallops.
              </li>
              <li>
                <strong>Vegetarian & Vegan:</strong> Hearty vegetable lasagna,
                stuffed peppers, and more.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Breakfast</h2>
            <p>Start your day with our delightful breakfast options.</p>
            <ul>
              <li>
                <strong>Hearty Omelettes:</strong> Made-to-order omelettes with
                your choice of fillings.
              </li>
              <li>
                <strong>Freshly Baked Pastries:</strong> Croissants, muffins,
                and other baked goods.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div>
            <h2 className="text-2xl font-bold">Salads</h2>
            <p>Enjoy our selection of fresh and flavorful salads.</p>
            <ul>
              <li>
                <strong>Greek Salad:</strong> Crisp vegetables, feta cheese, and
                olives.
              </li>
              <li>
                <strong>Caesar Salad:</strong> Romaine lettuce, croutons, and
                Caesar dressing.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Drinks</h2>
            <p>Quench your thirst with our refreshing drink options.</p>
            <ul>
              <li>
                <strong>Fresh Juices:</strong> Orange, apple, and other seasonal
                juices.
              </li>
              <li>
                <strong>Specialty Coffees:</strong> Espresso, cappuccino, and
                lattes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold">Desserts</h2>
            <p>Finish with our mouth-watering desserts.</p>
            <ul>
              <li>
                <strong>Decadent Cakes:</strong> Available in chocolate,
                vanilla, red velvet, and more.
              </li>
              <li>
                <strong>Gourmet Pastries:</strong> Macarons, éclairs, tarts, and
                other sweet treats.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialIcons = () => {
  return (
    <>
      <div className="flex gap-10">
        <SocialIcon url="https://www.threads.net/@tsa.catering?hl=en" />
        <SocialIcon url="https://www.instagram.com/tsa.catering/" />
      </div>
    </>
  );
};

const carouselData = [
  {
    category: "1",

    src: "/images/menu-catalogue/menu2.jpeg",
  },
  {
    category: "2",
    // title: "Enhance your productivity.",
    src: "/images/menu-catalogue/menu3.jpeg",
  },
  {
    category: "3",
    // title: "Launching the new Apple Vision Pro.",
    src: "/images/menu-catalogue/menu4.jpeg",
  },

  {
    category: "4",
    // title: "Maps for your iPhone 15 Pro Max.",
    src: "/images/menu-catalogue/menu5.jpeg",
  },
  {
    category: "5",
    // title: "Photography just got better.",
    src: "/images/menu-catalogue/menu6.jpeg",
  },
  {
    category: "6",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu7.jpeg",
  },
  {
    category: "7",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu8.jpeg",
  },
  {
    category: "8",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu9.jpeg",
  },
  {
    category: "9",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu10.jpeg",
  },
  {
    category: "10",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu11.jpeg",
  },
  {
    category: "11",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu12.jpeg",
  },
  {
    category: "12",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu13.jpeg",
  },
];

const data = [
  {
    category: "1",
    // title: "You can do more with AI.",
    src: "/images/menu-catalogue/menu2.jpeg",
  },
  {
    category: "2",
    // title: "Enhance your productivity.",
    src: "/images/menu-catalogue/menu3.jpeg",
  },
  {
    category: "3",
    // title: "Launching the new Apple Vision Pro.",
    src: "/images/menu-catalogue/menu4.jpeg",
  },

  {
    category: "4",
    // title: "Maps for your iPhone 15 Pro Max.",
    src: "/images/menu-catalogue/menu5.jpeg",
  },
  {
    category: "5",
    // title: "Photography just got better.",
    src: "/images/menu-catalogue/menu6.jpeg",
  },
  {
    category: "6",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu7.jpeg",
  },
  {
    category: "7",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu8.jpeg",
  },
  {
    category: "8",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu9.jpeg",
  },
  {
    category: "9",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu10.jpeg",
  },
  {
    category: "10",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu11.jpeg",
  },
  {
    category: "11",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu12.jpeg",
  },
  {
    category: "12",
    // title: "ng for a Staff Software Engineer",
    src: "/images/menu-catalogue/menu13.jpeg",
  },
];
