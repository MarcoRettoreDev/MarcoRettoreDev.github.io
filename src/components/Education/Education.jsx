import React from "react";

const Education = () =>
{
  return (
    <section>
      <div className="education__content-wrapper">
        <h2>Education</h2>
        <div className="education__header-wrapper">
          <div className="education__degree-wrapper">
            <div className="education__icon-wrapper">
              {"check logo"}
            </div>
            <p>Technician Degree in Business Administration</p>
          </div>
          <div className="education__degree-wrapper">
            <div className="education__icon-wrapper">
              {"loading logo"}
            </div>
            <p>Currently at 1st year of Information Systems career (software quality oriented) at universidad de tierra del fuego</p>
          </div>
       </div>
       <div className="education__body-wrapper">
         <h3>Courses</h3>
         <ul>
           <li>Introduction to the web</li>
           <li>Programming basics</li>
           <li>Professional HTML5 and CSS3</li>
           <li>Flexbox and Grid</li>
           <li>Responsive Web Design</li>
         </ul>
         <ul>
           <li>Javascript Basics</li>
           <li>Javascript Professional</li>
           <li>Object oriented programming</li>
           <li>Introduction to React</li>
           <li>Designing systems with React</li>
         </ul>
         <ul>
           <li>Javascript Asynchronism</li>
           <li>Design for programmers</li>
           <li>Front end Developer</li>
           <li>Profesioanl Git and Github</li>
           <li>Logical Thinking</li>
         </ul>
       </div>
       <div className="education__footer-wrapper">
         <p>All made on</p>
            {"Platzi logo"}
         <p>Platzi</p>
       </div>
      </div>
    </section>
  )
}

export { Education };