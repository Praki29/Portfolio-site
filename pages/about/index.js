import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaNodeJs,
  FaReact,
  FaAws,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiAzure,
  SiFlask,
} from "react-icons/si";

// data
const aboutData = [
  {
    title: "projects",
    info: [
      {
        title: "Self-Hosted Physical Server with Nextcloud",
        stage: "(Ubuntu, MySQL, PHP, Apache, Nginx)",
      },
      {
        title: "Face and Voice Authentication System",
        stage: "(Flask, CNN Model, NodeJS, Azure voice model)",
      },
      {
        title: "Sankalp – Schonell Reading Test",
        stage: "(NodeJS, EJS, MongoDB, Azure Speech to Text, AWS)",
      },
      {
        title: "Folio – Full Stack Book Review Web App",
        stage: "(React.js, NodeJS, Google Books API, MongoDB)",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Bachelor of Technology - Computer Science Engineering",
        stage:
          "2025, Vellore Institute of Technology, Chennai, India, CGPA: 8.51",
      },
      {
        title: "12th Grade, HSC",
        stage:
          "2021, Zion Mat. Hr. Sec. School, Chennai, India, Percentage: 92%",
      },
      {
        title: "10th Grade, SSLC",
        stage:
          "2019, Zion Mat. Hr. Sec. School, Chennai, India, Percentage: 94%",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Data Science Intern at L&T Infotech",
        stage: "Aug 2023 - Nov 2023",
      },
      {
        title: "Full Stack Web Development Intern at DevTown",
        stage: "Dec 2022 - Mar 2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import AvatarRev from "../../components/AvatarRev";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <AvatarRev className="z-0" />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 ml-[300px]">
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex flex-col md:flex-row max-w-max gap-x-2 items-start text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0 w-3/5">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div className="w-2/5 text-right">{item.stage}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
