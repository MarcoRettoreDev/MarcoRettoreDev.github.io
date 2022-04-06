import React from "react";
import './projects.css';
import { Card } from '../Card/Card';

const Projects = () =>
{
  return (
    <section className='section__projects-wrapper'>
      <h1 className="title"> My Projects</h1>
      <div className="projects__cards-wrapper">
        <Card/>
      </div>
    </section>
  )
}

export { Projects };