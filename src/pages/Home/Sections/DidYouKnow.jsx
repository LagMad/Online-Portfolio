import React from "react";
import { motion } from "framer-motion";

import SideView from "../../../assets/SideView.jpeg";
import FinalPitching from "../../../assets/FinalPitching.jpeg";
import BusinessMeet from "../../../assets/FirstBusinessMeet.jpeg";

const DidYouKnow = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center px-6 sm:px-10 md:px-20 lg:px-36 gap-10">
      <motion.div
        initial={{ opacity: 0, y: -150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 2.0,
            damping: 10,
            stiffness: 100,
          },
        }}
        className="flex flex-col font-black text-3xl md:text-5xl px-7 py-3 bg-cust-darker-blue text-white text-center gap-3 shadow-table"
      >
        <div>
          Did <span className="bg-cust-orange py-[2.25px]">You</span> Know?
        </div>
        <div className="text-lg md:text-3xl">
          I can't stop seeking a way to learn more things.
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            duration: 2.0,
            damping: 10,
            stiffness: 100,
          },
        }}
        className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center w-full md:w-2/3 gap-5">
          <div className="text-5xl font-bold text-center">
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out text-black hover:text-white py-0">
              Curious
            </span>{" "}
            Mind
          </div>
          <div className="text-base md:text-lg w-full font-medium text-justify">
            Discovering new thing and realizing I love said thing have
            always been a big part of my life. The first time I jumped into
            Front-End web development was when I joined BEM FILKOM UB 2023.
            I joined them with only basic HTML and CSS knowledge with high
            willingness to learn. I remember (and will always remember) the
            first task I got there. It was just a simple section of BEM
            FILKOM 2023 web's homepage. It took me the whole evening time to
            make my first ever section using Javascript React and Tailwind
            CSS. I didn't even sleep until I finished it and it was 8AM at
            the time. It wasn't because I was chased by deadline, but it was
            because I was so into what I was working on and my curiosity was
            pumping to know more about it. From this experience of mine, I
            see myself as someone who is full of curiosity and a hard
            working person. I will never stop working until my work is done.
          </div>
        </div>
        <img
          className="w-full md:w-1/3 h-[400px] md:h-[500px] object-cover object-center rounded-lg"
          src={SideView}
          alt="missing img"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            duration: 2.0,
            damping: 10,
            stiffness: 100,
          },
        }}
        className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-center"
      >
        <img
          className="w-full md:w-1/3 h-[400px] md:h-[500px] object-cover object-bottom rounded-lg"
          src={FinalPitching}
          alt="missing img"
          loading="lazy"
        />
        <div className="flex flex-col justify-center items-center w-full md:w-2/3 gap-5">
          <div className="text-5xl font-bold text-center">
            Thirsty of{" "}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out text-black hover:text-white py-0">
              Knowledge
            </span>
          </div>
          <div className="text-base md:text-lg w-full font-medium text-justify">
            Although my skill in Front-End web development has grown
            significantly ever since that day, my full of curious and hard
            working traits never vanished. I always try to find myself a
            place where I can grow. Not only just for my soft skills, but
            also the hard ones. Just like here on this picture of mine, I
            was on an internship final pitching of the selection series to
            enter one of the communities in my faculty. Just like when I was
            working on my first ever project on previous paragraph, I still
            don't know when to stop when working on something I like. For
            almost a month me and my team were working to make a website and
            I was the only Front-End developer on my team simply because the
            rule was to only have one person for each role. I just don't
            want to sleep when I was working on this project. I need to get
            my goals done before I sleep. The result? Unfortunately, I
            didn't get accepted into that community, but still I can't be
            more proud of myself because I know I have given my best for it.
            Even my friends saw my hardworks and they were surprise how I
            didn't get accepted. But hey, it isn't the end of the world when
            you didn't get accepted into something, right? Of course, it is
            NOT.
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            type: "spring",
            duration: 2.0,
            damping: 10,
            stiffness: 100,
          },
        }}
        className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center w-full md:w-2/3 gap-5">
          <div className="text-5xl font-bold text-center">
            Pushing{" "}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out text-black hover:text-white py-0">
              Forward
            </span>
          </div>
          <div className="text-base md:text-lg w-full font-medium text-justify">
            Just after the final pitching finished, one of my friend
            contacted me for a new project. At the time, I was still tired
            from one month of working on that internship selection series,
            but I see a big opportunity on this new project. It's still
            about website development, but this time, I'm making it for a
            multinational company working on export and import of spices.
            Now that's a leap I want to see. A bigger project, bigger
            responsibility, and now I've jumped into the professional world.
            By the time I made this portfolio, I'm still working on this
            website and soon my website will be presented to other companies
            in a conference in Vietnam.
          </div>
        </div>
        <img
          className="w-full md:w-1/3 h-[400px] md:h-[500px] object-cover object-center rounded-lg"
          src={BusinessMeet}
          alt="missing img"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 2.0,
            damping: 10,
            stiffness: 100,
          },
        }}
        className="w-full md:w-10/12 text-lg md:text-2xl text-center font-semibold py-3 md:py-5 px-5 md:px-10 rounded-2xl bg-cust-darker-blue text-white"
      >
        I just can't stop and I will never stop learning. Just like a
        mythical bird, Garuda. In some interpretations, Garuda is said to
        possess immense power and is capable of flying continuously without
        ever needing to land, except when it dies.
      </motion.div>
    </div>
  );
};

export default DidYouKnow;
