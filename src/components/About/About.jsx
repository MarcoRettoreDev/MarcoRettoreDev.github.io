import React from "react";
import './about.css';
import spaFlag from '../../icons/spain.png';
import ukFlag from '../../icons/united-kingdom.png';
import brFlag from '../../icons/brasil.png';

import { ReactComponent as CssIconGrey } from '../../icons/cssIconGrey.svg';
import { ReactComponent as HtmlIconGrey } from '../../icons/htmlIconGrey.svg';
import { ReactComponent as JsIconGrey } from '../../icons/jsIconGrey.svg';
import { ReactComponent as GitIconGrey } from '../../icons/gitIconGrey.svg';
import { ReactComponent as ReactIconGrey } from '../../icons/reactIconGrey.svg';

const About = () =>
{
  return (
    <section className="about__wrapper">
      <div className="about__content-wrapper">
        <h2 className="title">About</h2>
        <div className="about__tech-header">
          <h3 className="tech-title">Tech:</h3>
          <div type='button' className="about__button-knowme" >Know me</div>
        </div>
        <div className="tech__iconwrapper">
          <div className="tech-iconwrapper">
            <JsIconGrey/>
            <p>Javascript</p>
          </div>
          <div className="tech-iconwrapper">
            <CssIconGrey/> 
            <p>Css</p>
          </div>
          <div className="tech-iconwrapper">
            <HtmlIconGrey/>
            <p>HTML</p>
          </div>
          <div className="tech-iconwrapper">
            <GitIconGrey/>
            <p>Git</p>
          </div>
          <div className="tech-iconwrapper">
            <ReactIconGrey/>
            <p>React</p>
          </div>
        </div>
        <h3 className="tech-title">Languages:</h3>
        <div className="tech__iconwrapper">
          <div className="tech-iconwrapper">
            <img src={ukFlag} alt="United kingdom flag" />
            <p>English B1</p>
          </div>
          <div className="tech-iconwrapper">
            <img src={spaFlag} alt="Spain flag" />
            <p>Spanish Native</p>
          </div>
          <div className="tech-iconwrapper">
            <img src={brFlag} alt="Brasil flag" />
            <p>Portuguese C2</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { About };