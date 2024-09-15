import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className=" bg-blackhero-wrapper">
      <div className="paddings bg-black innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            className="text-white"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Discover <br />
              Areas in Danger
              <br /> in Real-Time
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Explore regions at risk with real-time data</span>
            <span>Stay informed and prepared for natural disasters</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter text-white stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Regions to be Monitored</span>
            </div>

            <div className="flexColCenter text-white stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Data streams</span>
            </div>

            <div className="flexColCenter text-white stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Disaster types</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          {/* <motion.div
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          > */}
<img className="w-[100%] max-w-[580px] h-auto" src="./hero-image.jpg" alt="disaster map" />

{/* </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
