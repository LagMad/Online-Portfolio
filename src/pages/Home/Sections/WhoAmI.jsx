import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

import SVGs from "../../../components/shared/SVGs";
import Portrait from "../../../assets/WhoAmI.jpeg";

const WhoAmI = () => {
  const numberRef = useRef(null);
  const [startCounting, setStartCounting] = useState(false);

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: startCounting ? n : 0,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div className={''}>
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    );
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounting(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-auto justify-center items-center gap-10 px-6 sm:px-10 md:px-20 lg:px-36 py-10 -mt-[112px] text-white bg-cust-darker-blue">
      <div className="flex flex-col md:flex-row w-full justify-center items-center gap-10 md:gap-28">
        <div className="flex flex-col w-full md:w-1/3 overflow-hidden items-end">
          <img
            className="w-full h-96 md:h-[500px] object-cover object-center rounded-lg"
            src={Portrait}
            alt="missing img"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col w-full md:w-2/3 justify-center items-start text-justify gap-7">
          <div className="text-lg md:text-2xl w-full font-black text-center md:text-left">
            Greetings and Welcome to my portfolio!
          </div>
          <div className="text-base md:text-lg w-full font-medium">
            The name is{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              Hizkia Jeremmy Krisna Ananta
            </span>
            , or in short{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              Jeremmy.
            </span>{' '}
            I am an{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              informatics engineering
            </span>{' '}
            student of Brawijaya University, Indonesia, and also one of
            TELADAN Leadership Program & Scholarship 2023's{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              awardee.
            </span>{' '}
            Currently, I am pursuing my interest in{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              Front-End Development
            </span>{' '}
            on website, but soon I am going to learn more about{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              application development
            </span>{' '}
            and{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              artificial intelligence.
            </span>{' '}
            It has been a never ending learning about technology for me as
            it is{' '}
            <span className="border-b-2 border-b-cust-orange bg-transparent hover:bg-cust-orange transition-all duration-500 ease-in-out">
              my passion.
            </span>
          </div>
          <div className="text-lg w-full font-medium">
            In this online portfolio, you will know more about me. There
            will be parts where you will know my journey, activites,
            projects, more skills, and how to connect with me.
          </div>
          <div className="flex flex-col w-full justify-center items-center md:items-start gap-3">
            <div className="text-lg font-medium w-full text-center md:text-left">
              See my other online portfolio
            </div>
            <button
              className="flex flex-col group justify-center items-center gap-2 bg-transparent hover:bg-cust-orange rounded-lg px-2 py-2 transform transition-all duration-500 ease-in-out"
              onClick={() => {
                window.open('https://github.com/LagMad', '_blank');
              }}
            >
              <SVGs.GitHub width="50px" height="50px" fillColor={'white'} />
              <div className="flex justify-center items-center overflow-hidden">
                <div className="transform transition-all duration-500 ease-in-out -translate-y-5 group-hover:translate-y-0 text-black group-hover:text-white">
                  GitHub
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <hr className="border-white border-2 rounded-full w-full max-w-4xl opacity-30" />
      <div
        className="flex flex-col md:flex-row w-full md:w-3/4 justify-center items-center gap-10"
        ref={numberRef}
      >
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              duration: 2.0,
              damping: 10,
              stiffness: 100,
            },
          }}
          className="flex flex-col w-full justify-center items-center"
        >
          <div className="text-7xl font-black">
            <Number n={11} />
          </div>
          <div className="text-2xl md:text-4xl font-normal text-center">
            Organizational Experiences
          </div>
          <div>and the journey continues...</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              duration: 2.0,
              damping: 10,
              stiffness: 100,
            },
          }}
          className="flex flex-col w-full justify-center items-center"
        >
          <div className="text-7xl font-black">
            <Number n={5} />
          </div>
          <div className="text-2xl md:text-4xl font-normal text-center">
            Projects Handled
          </div>
          <div>and the story unfolds...</div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoAmI;
