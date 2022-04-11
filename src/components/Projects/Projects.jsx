import React from "react";
import './projects.css';
import { Card } from '../Card/Card';
import { cardData } from '../Utils/cardsdata';


const Projects = () =>
{
  const data = cardData();
  return (
    <section className='section__projects-wrapper'>
      <h1 className="title"> My Projects</h1>
      <div className="projects__cards-wrapper">
        <Card 
        data={data}
        >
        
        </Card>
      </div>
      
    </section>
  )
}

export { Projects };