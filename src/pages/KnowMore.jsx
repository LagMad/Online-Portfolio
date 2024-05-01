import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Google from "../assets/Google.png";
import Selfie from "../assets/FinalPitchingSelfie.jpeg";
import AtTSA from "../assets/AtTSA.jpeg";
import AloneInClass from "../assets/AloneInClass.jpeg";
import Paralayang from "../assets/Paralayang.jpeg";
import CloseUp from "../assets/CloseUp.jpeg";

const KnowMore = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = window.scrollY;
        containerRef.current.style.backgroundPositionY = `-${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div
          className="flex flex-row w-full min-h-screen bg-AtTheBeach bg-fixed bg-cover bg-no-repeat justify-center items-center"
          ref={containerRef}
        >
          <div
            className="text-9xl font-black border-[5px] border-white px-8 py-2 transition-all duration-500 ease-in-out"
            style={{
              WebkitTextStrokeWidth: "5px", // Outline width
              WebkitTextStrokeColor: "white", // Outline color
              color: isHovered ? "white" : "transparent", // Text color
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            MISSION STATEMENT
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-20 pb-16">
          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex w-full flex-col text-9xl font-black group text-white overflow-hidden">
              <div className="text-left bg-cust-darker-blue px-36 py-10">
                <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
                  MY GOALS
                </div>
              </div>
              <div className="text-right bg-cust-orange px-36 py-10">
                <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
                  PURSUIT OF DREAM
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-10">
              <div className="flex flex-row w-full justify-center items-center px-36 gap-10">
                <div className="w-1/3">
                  <img
                    className="object-cover object-center rounded-2xl"
                    src={Selfie}
                    alt="missing img"
                  />
                </div>
                <div className="flex flex-col w-2/3 text-black text-lg font-medium text-justify gap-5">
                  <div>
                    As an Informatics Engineering student of Brawijaya
                    University, it is my responsibility to never stop learning
                    about the latest technology available. Do you know what is
                    the latest technology available right now that can be used
                    by every people on earth? Artificial Intelligence, or in
                    short, AI. AI never fails to blow my mind. Whether on how
                    fast it has grown or how advanced it has developed, it
                    always blows my mind. For me, making an AI feels like making
                    a whole new person that may even be able to do more things
                    better than the maker itself in some sector or aspects of
                    our life. But soon, it may even feel like us humans do. It
                    may even has it's own citizenship, like Sophia the robot who
                    has granted Saudi Arabian citizenship.
                  </div>
                  <div>
                    Technology has done an immense amount of benefit in humans
                    life. We used to use pigeons to send messages to someone far
                    away. But now? Now we can just use the technologically
                    advanced "brick" that we can bring anywhere we go in our
                    pockets and the palm of our hand, activate the brick, tappy
                    taps the brick, and the message will already be arrived
                    within a milisecond. That brick is called a "handphone."
                    Imagine explaining that to the people 100 years ago, they
                    won't even believe you within the first sentence. This
                    significant improvement only happened in less than one
                    century. We already got a self-driving car now. Now imagine
                    what will happen within the next centuries. All those so
                    called dreams and fantasies may come true. The only limit is
                    what is within your head.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex w-full flex-col text-9xl font-black group text-white overflow-hidden">
              <div className="text-left bg-cust-darker-blue px-36 py-10">
                <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
                  DREAM COMPANY
                </div>
              </div>
              <div className="text-right bg-cust-orange px-36 py-10">
                <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
                  A PLACE TO GROW
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full justify-center items-center px-36 gap-10">
              <div className="flex flex-col w-2/3 text-black text-lg font-medium text-justify gap-5">
                <div>
                  Who doesn't know google? Oh wait, let me correct that for you.
                  Who doesn't USE google? Google has become some sort of primary
                  solution for a lot of question answering and information
                  gathering in this modern world. Google doesn't stop at it's
                  famous search engine, but also Google Maps, Google Mail,
                  Google Drive, Youtube, and a lot of other things that has
                  helped billions of people around the globe. I am 101% sure
                  that google will not just stop at what they have right now.
                  They will continue on making and innovating new things around
                  technology and make the world an even more technologically
                  advanced place.
                </div>
                <div>
                  These are only a few reasons out of many on why Google has
                  become the dream company for many people around the world,
                  including myself. Every programmer in every company has
                  started to embed artificial intelligence into every program
                  they build. What am I talking about, it's not just every
                  programmer but every people in the world has started using
                  artificial intelligence in almost every work they do. Now,
                  imagine what will google create with Artificial intelligence
                  in just within the next 10 years? The possibilities are
                  limitless and I want to be a part of those possibilities.
                </div>
              </div>
              <div className="w-1/3">
                <img
                  className="object-cover object-center rounded-2xl"
                  src={Google}
                  alt="missing img"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex w-full flex-col text-9xl font-black group text-white overflow-hidden">
              <div className="text-left bg-cust-darker-blue px-36 py-10">
                <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
                  ULTIMATE GOAL
                </div>
              </div>
              <div className="text-right bg-cust-orange px-36 py-10">
                <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
                  PARAMOUNT AIM
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-10">
              <div className="flex flex-row w-full justify-center items-center px-36 gap-10">
                <div className="w-1/3">
                  <img
                    className="h-[400px] object-cover object-left rounded-2xl"
                    src={AtTSA}
                    alt="missing img"
                  />
                </div>
                <div className="flex flex-col w-2/3 text-black text-lg font-medium text-justify gap-5">
                  <div>
                    Although having a dream company may seems like the peak of
                    my goal, to work there, it isn't the actual goal. As I said
                    before, technology has done an immense amount of benefit
                    towards human. Sure it has helped us in managing our
                    documents. Sure it has helped us in messaging our beloved
                    one from far away. Sure it has helped us in many other
                    sectors. But what is the reason technology exist?
                    Efficiency. Through technology, we don't have to wait for a
                    week for our message to arrive. Through technology, we can
                    order foods from our bed and within minutes it will already
                    in front of our door.
                  </div>
                  <div>
                    Efficiency is the core of my vision for a company that
                    harnesses cutting-edge technologies like AI to tackle
                    inefficiencies across industries. Whether it's optimizing
                    supply chains, revolutionizing healthcare delivery, or
                    streamlining everyday tasks, the goal remains the same: to
                    make processes smoother, faster, and more effective. I
                    envision a world where businesses anticipate market demands
                    accurately, healthcare providers deliver personalized
                    treatments in real-time, and individuals manage tasks
                    effortlessly with intelligent assistants. Efficiency isn't
                    just about saving time or resources, it's about unlocking
                    human potential and accelerate progress. My ultimate goal is
                    to create a world where efficiency is embodied in every
                    aspect of life, empowering individuals and organizations to
                    operate at their full potential and make meaningful
                    contributions to society.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full justify-center items-center gap-10">
            <div className="flex w-full flex-col text-9xl font-black group text-white overflow-hidden justify-center items-center">
              <div className="w-full text-left bg-cust-darker-blue px-36 py-10">
                <div className="transform transition-all duration-500 ease-in-out group-hover:translate-x-[100px]">
                  MY MISSION
                </div>
              </div>
              <div className="w-full text-right bg-cust-orange px-36 py-10 z-10">
                <div className="transform transition-all duration-500 ease-in-ou group-hover:-translate-x-[100px]">
                  PURPOSE IN ACTION
                </div>
              </div>
              <div className="w-6/12 text-center text-3xl font-bold mb-5 bg-cust-darker-blue px-7 pt-10 -mt-8 pb-3 z-0 text-white rounded-b-2xl group-hover:translate-y-5 transform transition-all duration-500 ease-in-out">
                How can I achieve these ambitious and big goals?
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-5">
              <div className="flex flex-row w-full justify-center items-center px-36">
                <div className="w-1/3 p-5 bg-cust-darker-blue rounded-[36px]">
                  <img
                    className="h-[400px] w-full object-cover object-center rounded-2xl"
                    src={AloneInClass}
                    alt="missing img"
                  />
                </div>
                <div className="w-2/3 text-white text-lg font-medium text-justify gap-5 bg-cust-darker-blue px-10 py-7 rounded-r-2xl">
                  Getting a grip on time management is the key for keeping life
                  in check, especially for us teenagers juggling a ton of stuff.
                  It's not just about meeting deadlines, it's about making every
                  moment count, finding that sweet spot between work and play.
                  I'm all about advancing this skill to make life smoother for
                  myself and others. Think of it like investing in your own
                  chill and productivity levels. I'm committed to getting better
                  at this, knowing it'll pay off big time in making life less
                  chaotic and more awesome. Whether it's carving out time for
                  schoolwork, hobbies, or just chilling with friends, having a
                  handle on time management lets me do it all without feeling
                  overwhelmed. Plus, it's not just about being busy,{" "}
                  <span className="font-bold">it's about being effective</span>{" "}
                  and making time for the things that really matter. So, I'm all
                  in on mastering this skill and helping others do the same
                  because life's too short to be stressed out all the time.
                </div>
                {/* <div className="w-2/3 text-white text-lg font-medium text-justify gap-5 bg-cust-darker-blue px-10 py-7 rounded-r-2xl">
                  First, I want to make sure that I have a good time management
                  skill because I know it has been a big problem for so many
                  people, especially teenagers such as myself. Practicing time
                  management skill will become a huge investment in the long
                  shot because what's good a person if they can't even manage
                  their own time about when to eat, when to do their work, and
                  when to rest?
                </div> */}
              </div>
              <div className="flex flex-row w-full justify-center items-center px-36">
                <div className="flex flex-col w-2/3 text-white text-lg font-medium text-justify gap-5 bg-cust-darker-blue px-10 py-7 rounded-l-2xl">
                  Secondly, understanding myself is crucial for navigating
                  life's twists and turns and staying true to my goals. It's
                  about figuring out what drives me, what I'm passionate about,
                  and how to chart my course toward success. Delving into
                  self-awareness isn't just about finding answers; it's about
                  uncovering the deeper meaning behind our existence and what
                  keeps us motivated. Pursuing our goals demands courage, the
                  kind that comes from knowing ourselves inside out. Without
                  that understanding, finding the bravery to chase our dreams
                  becomes a daunting task. So, I'm committed to diving deep into
                  self-discovery, knowing that it's the first step towards
                  realizing my full potential and making a meaningful impact on
                  the world around me.
                </div>
                {/* <div className="flex flex-col w-2/3 text-white text-lg font-medium text-justify gap-5 bg-cust-darker-blue px-10 py-7 rounded-l-2xl">
                  Second, I have to understand myself, what I need to do in
                  every step of my life, and how to find that pathway to reach
                  my goal. Understanding oneself is the first step to find the
                  big question of why did we born in the first place and what
                  makes us keep going. Reaching that goal requires me a big
                  courage and that courage isn't easy to find without proper
                  understanding of what's in my mind.
                </div> */}
                <div className="w-1/3 p-5 bg-cust-darker-blue rounded-[36px]">
                  <img
                    className="h-[400px] w-full object-cover object-center rounded-2xl"
                    src={CloseUp}
                    alt="missing img"
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-center items-center px-36">
                <div className="w-1/3 p-5 bg-cust-darker-blue rounded-[36px]">
                  <img
                    className="h-[400px] w-full object-cover object-bottom rounded-2xl"
                    src={Paralayang}
                    alt="missing img"
                  />
                </div>
                <div className="flex flex-col w-2/3 text-white text-lg font-medium text-justify gap-5 bg-cust-darker-blue px-10 py-7 rounded-r-2xl">
                  Thirdly, I believe in the power of experiences to enhance my
                  skills. They say experience is the greatest teacher, and I
                  couldn't agree more. Many of the skills I got have been
                  acquired through diving in myself in new adventures and
                  embracing the challenges they bring. It's not just about
                  theoretical knowledge, it's about rolling up my sleeves and
                  getting my hands dirty on the field. Whether it's learning a
                  new programming language, mastering public speaking, or
                  developing leadership abilities, nothing beats the lessons
                  learned from the real-world experiences. So, I'm all about
                  seeking out new opportunities to grow and expand my skill set,
                  knowing that each experience brings valuable lessons that
                  shape me into a more capable and versatile individual.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default KnowMore;
