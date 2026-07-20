import Image from "next/image";
import React from "react";
import { TabsDemo } from "./Tabs/Tabs";

const About = () => {
  return (
    <section className="text-white my-10" id="about">
      <div className="md:grid md:grid-cols-2  items-center  sm:gap-8  xl:gap-16 sm:py-16 ">
        <Image src={"/about-image.png"} width={500} height={500} />

        {/*Right */}
        <div className="sm:text-left text-center flex flex-col gap-10 my-10">
          <h1 className="text-background text-2xl sm:text-6xl font-bold">
            About Me
          </h1>
          <p className="text-background lg:text-lg">
            {" "}
            I am a Frontend Developer and a Computers & Information graduate
            with a passion for building interactive, responsive, and
            high-performance web applications. Specializing in React, Next.js,
            and TypeScript, I love bringing designs to life with clean code and
            smooth animations. I’m always eager to learn, optimize performance,
            and collaborate on building amazing user experiences
          </p>
          <TabsDemo />
        </div>
      </div>
    </section>
  );
};

export default About;
