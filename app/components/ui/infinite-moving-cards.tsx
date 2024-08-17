"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  const images = [
    "images/tsa-catering-image1.jpeg",
    "images/tsa-catering-image2.jpeg",
    "images/tsa-catering-image3.jpeg",
    "images/tsa-catering-image4.jpeg",
    "images/tsa-catering-image5.jpeg",
    "images/tsa-catering-image6.jpeg",
    "images/tsa-catering-image7.jpeg",
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-3xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_2%,white_98%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {images.map((image, idx) => (
          <li
            className="w-[1000px] h-full max-w-full relative flex-shrink-0 md:w-[1000px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={idx}
          >
            <blockquote>
              <img
                src={image}
                alt={`Catering Image ${idx + 1}`}
              />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
