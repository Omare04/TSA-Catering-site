"use client";
import Image from "next/image";
import { Menu, MenuItem } from "./components/ui/navbar-menu";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { FlipWords } from "./components/ui/flip-words";
import { ContactForm } from "./ContactComponent";
import { BackgroundBeams } from "./components/ui/background-beams";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
// import MenuPage, { CardsCarousel, Card } from "./components/pages/menu";
import { Card } from "./components/ui/card-carousel";
import { ExpandableCard } from "./components/ui/expandable-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { MenuSection } from "./components/pages/menu";
import { SocialIcon } from "react-social-icons";
import Gallery from "./components/pages/gallery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { Button } from "./shadcn-components/ui/button";
import { useEffect, useCallback } from "react";

const wordsText = `TSA-Catering proudly serves the majority of airports across Morocco, consistently delivering high-quality meals tailored to meet our customers' needs. Our unwavering commitment to these values ensures exceptional service 24/7, 365 days a year.`;

export default function Home() {
  const words = ["Exclusive", "Premium", "High-end", "High-quality"];
  const [currentSection, setCurrentSection] = useState("section1");

  // Scroll handler function
  const handleScroll = () => {
    const sectionId = getCurrentSectionId();
    setCurrentSection(sectionId);
  };

  // Get the current section ID
  const observer = useCallback((node) => {
    if (node !== null) {
      const observerInstance = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(entry.target.id);
            }
          });
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );

      observerInstance.observe(node);

      return () => {
        observerInstance.unobserve(node);
      };
    }
  }, []);

  // Scroll to the section
  const scrollToSnap = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BackgroundBeams />
      <main className="h-screen snap-y overflow-y-scroll scroll-smooth">
        <div className="h-full w-full snap-y snap-mandatory px-10">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="snap-center"
            id="section1"
            ref={observer}
          >
            <Navbar className="top-2" />
            {/* LOGO */}
            <div className="top-0 right-0 mt-4 mr-4"></div>
            <div className="w-full ml-2 pt-2 flex justify-between">
              <img
                src="images/tsa-logo-removebg-preview.png"
                alt="logo"
                className="h-14 w-40"
              />
              <div className="h-2">
                <SocialIcons />
              </div>
            </div>
            {/* Socials */}
            {/* Socials */}
            {/* Main Content Container */}
            <div className="max-h-screen pt-1 max-w-screen">
              {/* TEXT */}
              <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 flex w-full"></div>

              {/* Content Container */}
              <div className="h-full flex justify-center gap-10 pt-6 ">
                {/* Left Container*/}
                <div className="h-full w-300 z-40 mt-3 ml-2 flex justify-center flex-col">
                  <div className="flex w-full ml-1">
                    <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 flex w-full pb-4">
                      <span>
                        <FlipWords words={words} className="" /> <br />
                        <p className="text-3xl pt-2 text-black">
                          Catering for private business aviation
                        </p>
                      </span>
                    </div>
                  </div>

                  {/* Small Text */}
                  <p className=" from-neutral-300 ml-1">
                    <TextGenerateEffect
                      duration={2}
                      filter={false}
                      words={wordsText}
                    />
                  </p>
                  <div className="h-full w-full pt-6">
                    <ContactForm />
                  </div>
                </div>
                <InfiniteMovingCards
                  direction="right"
                  speed="slow"
                  pauseOnHover={false}
                />
              </div>
            </div>
          </motion.div>
          {/* Gallery Section */}
          <div
            className=" snap-center flex w-full py-7"
            id="section2"
            ref={observer}
          >
            <ExpandableCard />
          </div>

          <div
            className="snap-center  h-full w-full pt-7 pl-10"
            id="section3"
            ref={observer}
          >
            <MenuSection />
          </div>
          <div
            className="snap-center  h-full w-full pt-7 pl-6"
            id="section4"
            ref={observer}
          >
            <Gallery />
          </div>
        </div>
        {currentSection !== "section1" && (
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-4 right-6 bg-white bg-opacity-40 text-white rounded-full shadow-lg hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => scrollToSnap(`#section1`)}
          >
            <ArrowIcon />
          </Button>
        )}
      </main>
    </>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Company"
            section="section2"
            icon={<CompanyIcon />}
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Menu"
            section="section3"
            icon={<MenuIcon />}
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Gallery"
            section="section4"
            icon={<GalleryIcon />}
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
            openModal={() => setIsModalOpen(true)}
            icon={<ContactIcon />}
          />
        </Menu>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

const Modal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle className="text-2xl pl-1">Contact</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-lg flex  gap-10 w-full justify-start pt-2">
          {/* Phone */}
          <div className="w=1/2 ">
            <div>
              <span className="font-bold pl-1 flex align-middle gap-1">
                {" "}
                <span className="pt-0.5">
                  <ContactIcon />{" "}
                </span>
                Phone:
              </span>
              <div className="flex flex-col gap-1 text-base pl-3 pt-1">
                <p>+212 0537782757</p>
                <p>+212 0661934103 </p>
              </div>
            </div>
            <div className="text-base flex flex-col gap-0.5 pl-4 pt-3">
              <div>
                <span className="font-bold">Patente:</span> 28700333{" "}
              </div>{" "}
              <div>
                {" "}
                <span className="font-bold">R.C.:</span> 15090{" "}
              </div>{" "}
              <div>
                <span className="font-bold">I.F.:</span>36119190
              </div>{" "}
              <div>
                <span className="font-bold">C.N.S.S.:</span>6388666
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-1/2">
            {/* Email */}
            <div>
              <p className="font-bold">
                <span className="flex gap-1 align-bottom pl-0.5">
                  {" "}
                  <MailIcon /> <span>Email: </span>
                </span>
                <span className="text-base font-normal">
                  {" "}
                  service@tsa-catering.com
                </span>
              </p>
            </div>

            {/* Address */}
            <div>
              <p className="text-base">
                <span className="font-bold text-lg flex gap-1 align-baseline">
                  {" "}
                  <StoreIcon /> <span> Address:</span>{" "}
                </span>{" "}
                Imm. Benbrahim Nr. 1, Bab Bouhaja 11000 Sale, Morocco{" "}
              </p>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

const CompanyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l18 0" />
    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
    <path d="M5 21l0 -10.15" />
    <path d="M19 21l0 -10.15" />
    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-tools-kitchen-2"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19 3v12h-5c-.023 -3.681 .184 -7.406 5 -12zm0 12v6h-1v-3m-10 -14v17m-3 -17v3a3 3 0 1 0 6 0v-3" />
  </svg>
);

const GalleryIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-photo"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M15 8h.01" />
    <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
    <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
    <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
  </svg>
);

const ContactIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-phone"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  </svg>
);

const SocialIcons = () => {
  const iconStyle = { width: "35px", height: "35px" }; // Adjust size as needed

  return (
    <div className="flex gap-5 pt-1">
      <SocialIcon
        url="https://www.threads.net/@tsa.catering?hl=en"
        style={iconStyle}
      />
      <SocialIcon
        url="https://www.instagram.com/tsa.catering/"
        style={iconStyle}
      />
    </div>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="gray"
    stroke="gray"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 5l0 14" />
    <path d="M18 11l-6 -6" />
    <path d="M6 11l6 -6" />
  </svg>
);

const StoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-building-store"
    className="mt-0.5"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 21l18 0" />
    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
    <path d="M5 21l0 -10.15" />
    <path d="M19 21l0 -10.15" />
    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
    className="mt-1"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
    <path d="M3 7l9 6l9 -6" />
  </svg>
);

const carouselData = [
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
