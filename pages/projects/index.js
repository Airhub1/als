import React from "react";
import IDOPlatform from "../../components/IDOPlatform/IDOPlatform";
import Layout from "../../components/Layout/Layout";
import ProjectComponent from "../../components/Project/Project";

const Projects = () => {
  return (
    <Layout>
      <ProjectComponent />
      <IDOPlatform />
    </Layout>
  );
};

export default Projects;
