import './card.css';
import ricknMortyLogo from '../../images/Rick and morty-png-circle.png'
import iconReact from '../../icons/iconReact.svg';
import iconJavascript from '../../icons/iconJavascript.svg';
import iconGithub from '../../icons/iconGithubBlack.svg';
import iconOpenLink from '../../icons/iconOpenLink.svg';

import iconNextpage from '../../icons/iconNextpage.svg';
const Card = () =>
{
  return(
    <div className="cards__card-wrapper">
      <div className="card__img-wrapper">
        <img src={ricknMortyLogo} alt="Logo rick and morty" />
      </div>
      <div className="card__text-wrapper">
        <div className="card__text-header">
          <h4>Rick and Morty App</h4>
          <p>Mini-app that show you the characters info of the rick and morty series</p>
          <p>Built with:</p>
        </div>
        <div className='card__icons-wrapper'>
          <div className="icons__icon-wrapper">
              <img src={iconReact} alt="React icon" />
          </div>
          <div className="icons__icon-wrapper">
            <img src={iconJavascript} alt="Javascript icon" />
          </div>
          <div className="icons__icon-wrapper">
            <img src={iconGithub} alt="Github icon" />
            <p>Repo</p>
          </div>
          <div className="icons__icon-wrapper">
            <img src={iconOpenLink} alt="Openlink icon" />
            <p>Deploy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Card };