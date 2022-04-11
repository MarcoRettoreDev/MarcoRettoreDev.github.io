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
        {
        data.map((info, i)=> 
          <Card 
          key={i}
          title ={info.title}
          description= {info.description}
          imgurl={info.imgurl}
          deployURL={info.deployURL}
          githubURL={info.githubURL}
          iconReact={info.iconReact}
          iconJs={info.iconJs}
          iconCss={info.iconCss}
          iconHtml={info.iconHtml}
          />
      
        )}

      </div>
      
    </section>
  )
}

export { Projects };