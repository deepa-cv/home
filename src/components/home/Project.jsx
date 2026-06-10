import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: "Catalog Indexing Engine",
  description:"abcd" ,
  svn_url: "https://github.com/BFB-PES/Catalog-Indexing-Engine",
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/deepa-cv/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([{
    name: "Catalog Indexing Engine",
    description:"Efficient retrieval methods for fashion catalogs. Uses microservices based architecture and supports both structured and unstructured queries. ML techniques to return most relevant products." ,
    svn_url: "https://github.com/BFB-PES/Catalog-Indexing-Engine",
    stargazers_count: null,
    languages_url: ["Python","Docker","Kubernetes","Kafka", "Postgres", "Flask", "Tensorflow 2.0", "sklearn"],
    pushed_at: null,
  },
  {
    name: "Student Attrition Prevention",
    description:"Identify at risk students in online courses by predicting their future assessment marks based on current performance. Used ensemble techniques to achieve the same." ,
    svn_url: "https://github.com/deepa-cv/Prevent-Student-Attriton",
    stargazers_count: null,
    languages_url: ["Python", "sklearn", "pandas", "numpy"],
    pushed_at: null,
  },
  {
    name: "Kinship Recognition",
    description:"This project aimed to analyze whether two people are related by blood or not through their facial pictures using Siamese Networks.",
    svn_url: "https://github.com/Pravena725/Kinship-Recognition",
    stargazers_count: null,
    languages_url: ["Python", "Tensorflow 2.0", "Matplotlib"],
    pushed_at: null,
  },
  {
    name: "San Francisco Crime Classification using Pyspark",
    description:"This project aimed to classify crime using incremental Learning and streaming techniques to train models based on new data encountered." ,
    svn_url: "https://github.com/BFB-PES/Catalog-Indexing-Engine",
    stargazers_count: null,
    languages_url: ["Python","Pyspark"],
    pushed_at: null,
  },
  {
    name: "MoodBoost",
    description:"As a part of Hackalytics,an MLH hosted hackathon, we built a streamlit application to help individuals improve their mental health during the Covid-19 crisis." ,
    svn_url: "https://github.com/ELITA04/Hacklytics-Streamlit",
    stargazers_count: null,
    languages_url:["Python", "Tensorflow","Plotly", "Streamlit"],
    pushed_at: null,
  },
  {
    name: "Visualising Coral Reef Degradation",
    description:"Descriptive analysis of how coral reefs have degraded from 1998 to 2017 using the Coral Reef Temperature Anomaly Database (CoRTAD)" ,
    svn_url: "https://github.com/deepa-cv/Visualising-Coral-Reef-Degradation",
    stargazers_count: null,
    languages_url:['Tableau'],
    pushed_at: null,
  },
]);
// console.log(projectsArray.length)
  // const fetchRepos = useCallback(async () => {
  //   let repoList = [];
  //   try {
  //     // getting all repos
  //     // const response = await axios.get(allReposAPI);
  //     // // slicing to the length
  //     // repoList = [...response.data.slice(0, length)];
  //     // console.log(repoList);
  //     // // adding specified repos
  //     try {
  //       for (let repoName of specfic) {
  //         const response = await axios.get(`${specficReposAPI}/${repoName}`);
  //         repoList.push(response.data);
  //         console.log(repoList);
  //       }
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     // setting projectArray
  //     // TODO: remove the duplication.
  //     setProjectsArray(repoList);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, [allReposAPI, length, specfic, specficReposAPI]);

  // useEffect(() => {
  //   fetchRepos();
  // }, [fetchRepos]);

  // console.log(projectsArray);
  return (
    <Jumbotron fluid id="projects" className="m-0" style={{
      background: "#E4E4D0",
      // backgroundSize: "1200% 1200%",
    }}>
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
              <ProjectCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={project}
              />
            ))
            : dummyProjectsArr.map((project, index) => (
              <ProjectCard
                key={`dummy-${index}`}
                id={`dummy-${index}`}
                value={project}
              />
            ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
