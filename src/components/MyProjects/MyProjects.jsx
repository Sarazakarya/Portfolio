import React from "react";
import { CardImage } from "./Cards/Cards";

const MyProjects = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl md:text-6xl font-bold text-background mt-4 mb-8 md:mb-12">
        My Projects
      </h2>

      <CardImage/>
    </section>
  );
};

export default MyProjects;
