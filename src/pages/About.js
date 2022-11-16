import React from "react";
import Layout from "../components/Layout";
import { InstagramIcon } from "../components/icons";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./about.css";

const About = () => {
  return (
    <Layout title="About" description="This is the About page">
      <div className="text-center mt-5">
        <h1 class="sobreMi">Sobre mí</h1>
        <p class="add">[AÑADIR DESCRIPCIÓN]</p>
        <p class="add">[AÑADIR REDES SOCIALES]</p>

        <Carousel />

        <a
          style={{ backgroundColor: "#B134AF" }}
          className="btn btn-primary"
          href="https://www.instagram.com/grannubesucia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon width={"18px"} />{" "}
          <span className="ml-3 mr-6">Instragram</span>
        </a>
      </div>
    </Layout>
  );
};

export default About;
