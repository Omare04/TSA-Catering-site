"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon,
  section,
  openModal,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon: React.ReactNode;
  section?: string;
  openModal?: () => void;
  children?: React.ReactNode;
}) => {
  const scrollToSnap = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
      onClick={() =>
        section ? scrollToSnap(`#${section}`) : openModal && openModal()
      }
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-slate-500 hover:opacity-[0.6] dark:text-white"
      >
        <div className="flex gap-1">
          {icon}
          {item}
        </div>
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full bg-gray-100/50 backdrop-blur-lg z-60 bg-opacity-45 dark:bg-gray-800/50 dark:border-white/[0.4] shadow-input flex justify-center space-x-20 px-7 py-3"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className="text-gray-900 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};
