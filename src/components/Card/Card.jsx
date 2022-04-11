import './card.css';
import { React } from 'react';
import { ReactComponent as IconOpenLink }  from '../../icons/iconOpenLink.svg';
import { ReactComponent as IconGithub }  from '../../icons/iconGithubBlack.svg';
import { ReactComponent as IconNextpage } from '../../icons/iconNextpage.svg';

import { VerifyIconReact } from '../../icons/VerifyIconReact';
import { VerifyIconJs } from '../../icons/VerifyIconJs';
import { VerifyIconHtml } from '../../icons/VerifyIconHtml';
import { VerifyIconCss } from '../../icons/VerifyIconCss';

const Card = ({ title ,imgurl, description, deployURL, githubURL , iconReact , iconJs, iconCss, iconHtml}) =>
{

  return(
    <section className="cards__card-wrapper" >
      <div className="card__img-wrapper">
        <img src={imgurl} alt="Logo rick and morty" />
      </div>
      <div className="card__text-wrapper">
        <div className="card__text-header">
          <h4>{title}</h4>
          <p className='card__text-description'>{description}</p>
          <p>Built with:</p>
        </div>
        <div className='card__icons-wrapper'>
          <div className="card_icons_skills">
            <VerifyIconReact
            react = {iconReact}
            />          
            <VerifyIconJs
            javascript={ iconJs }
            />
            <VerifyIconHtml
              iconHtml={iconHtml}
            />
            <VerifyIconCss
              iconCss={iconCss}
            />
          </div>

          <div className='card_icons-git-deploy'>
            <a href={githubURL} target='_blank'>
              <div className="icons__icon-wrapper">
                <div className="svg-wrapper">
                  <IconGithub/>
                </div>
                Repo
              </div>
            </a>
            <a href={deployURL} target='_blank'>
              <div className="icons__icon-wrapper">
                <div className="svg-wrapper">
                  <IconOpenLink/>
                </div>
                Deploy
              </div>
            </a>
          </div>          
        </div>
      </div>
    </section>
  )
}

export { Card };