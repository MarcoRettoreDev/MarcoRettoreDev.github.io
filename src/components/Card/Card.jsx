import './card.css';

import { ReactComponent as IconReact } from '../../icons/iconReact.svg';
import { ReactComponent as IconJavascript } from '../../icons/iconJavascript.svg';
import { ReactComponent as IconGithub } from '../../icons/iconGithubBlack.svg';
import { ReactComponent as IconOpenLink }  from '../../icons/iconOpenLink.svg';

import { ReactComponent as IconNextpage } from '../../icons/iconNextpage.svg';

const Card = ({ data }) =>
{
  console.log(data)
  return(
    <section className="cards__card-wrapper">
      <div className="card__img-wrapper">
        <img src={data[0].imgurl} alt="Logo rick and morty" />
      </div>
      <div className="card__text-wrapper">
        <div className="card__text-header">
          <h4>{data[0].title}</h4>
          <p className='card__text-description'>{data[0].description}</p>
          <p>Built with:</p>
        </div>
        <div className='card__icons-wrapper'>
          <div className="icons__icon-wrapper">
            <div className="svg-wrapper">
              <IconReact/>
            </div>
          </div>
          <div className="icons__icon-wrapper">
            <div className="svg-wrapper">
              <IconJavascript/>
            </div>
          </div>
          <a href={data[0].githubURL} target='_blank'>
            <div className="icons__icon-wrapper">
              <div className="svg-wrapper">
                <IconGithub/>
              </div>
              Repo
            </div>
          </a>
          <a href={data[0].deployURL} target='_blank'>
            <div className="icons__icon-wrapper">
              <div className="svg-wrapper">
                <IconOpenLink/>
              </div>
              Deploy
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export { Card };