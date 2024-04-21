import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/portfolio.png"
          title="Modern Next.js Portfolio"
          description="My personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion."
          link="https://sugotobasu.vercel.app/"
        />
        <ProjectCard
          src="/anetha.png"
          title="AI-Powered Financial Analyst"
          description="A financial analyst agent built for Selendis Technologies that provides insights on market trends and predictions, along with LLM powered chat interface."
          link="https://anetha.selendis.co/"
        />
        <ProjectCard
          src="/trading.png"
          title="Unsupervised Trading Strategy using Python and ML"
          description="Dive into the S&P 500 market with this project, which employs unsupervised learning techniques to identify top-performing stocks, leveraging K-Means Clustering and Efficient Frontier optimization for a dynamic portfolio."
          link="https://github.com/Sugoto/Algorithmic-Trading-Using-Unsupervised-Learning"
        />
      </div>
    </div>
  );
};

export default Projects;
