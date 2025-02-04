import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[5%] sm:px-[10%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Introduction Section */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-Ovo mb-6"
      >
        About me
      </motion.h2>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10"
      >
        {/* User Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px] mx-auto lg:mx-0"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>

        {/* Bio and Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 w-full"
        >
          <p className="mb-5 text-sm sm:text-base font-Ovo text-center lg:text-justify">
            A Frontend Web Developer with over 6 years of experience in the IT
            industry. My journey began as a Data Analyst, where I spent 4 years
            honing my analytical and problem-solving skills. I transitioned into
            Frontend Development and have since dedicated 2+ years to crafting
            responsive, intuitive, and visually appealing web applications.
            Currently based in Bengaluru, India, I thrive on turning complex
            ideas into seamless, interactive designs. Let’s build something
            amazing together!
          </p>

          {/* Info List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border border-gray-400 rounded-xl p-4 sm:p-5 cursor-pointer 
                hover:bg-lightHover hover:-translate-y-1 duration-500 
                dark:border-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-2"
                />
                <h3 className="my-2 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mb-3 text-gray-700 font-Ovo dark:text-white/80 text-center lg:text-left"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-9 sm:w-11 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-6" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
