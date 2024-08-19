"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <ul className="mx-auto w-full grid grid-cols-3 phone-screen:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 items-start gap-4 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 bg-slate-50 bg-opacity-60 rounded-xl "
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Fresh and vibrant salads made with crisp greens, seasonal vegetables, and delicious dressings",
    title: "Salads",
    src: "/images/menu/menu-salads.jpeg",
    imageArr: [
      "/images/menu/menu-salads.jpeg",
      "/images/menu/menu-drinks.jpeg",
      "/images/menu/menu-breakfast.jpeg",
    ],
  },
  {
    description:
      "Delight in our flavorful appetizers, perfect for whetting your appetite before the main meal",
    title: "Appetizers",
    src: "/images/menu/menu-appetizers.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return <p></p>;
    },
  },

  {
    description:
      "Savor our exquisite main courses, crafted with premium ingredients and culinary expertise",
    title: "Main Courses",
    // src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    src: "/images/menu/menu-main-course.jpeg",
    content: () => {
      return <p></p>;
    },
  },
  {
    description:
      "Indulge in our decadent desserts, offering a sweet conclusion to your dining experience",
    title: "Desserts",
    ctaText: "Visit",
    src: "/images/menu/menu-desserts.jpeg",
    content: () => {
      return <p></p>;
    },
  },
  {
    description:
      " Start your day with our gourmet breakfast options, featuring pastries, eggs, and fresh fruits",
    title: "Breakfast",
    ctaText: "Visit",
    src: "/images/menu/menu-breakfast.jpeg",
    content: () => {
      return <p></p>;
    },
  },
  {
    description:
      "A variety of refreshing beverages, including juices, soft drinks, and specialty fruit juices",
    title: "Drinks",
    ctaText: "Visit",
    src: "/images/menu/menu-drinks.jpeg",
    content: () => {
      return <p></p>;
    },
  },
];
