import { ReactComponent as IconHtml } from './iconHtml.svg';
import React from "react"

const VerifyIconHtml = ({ iconHtml }) =>
{
  switch(iconHtml)
  {
    case true:
      return (
        <div className="icons__icon-wrapper">
          <div className="svg-wrapper">
            <IconHtml/>
          </div>
        </div>
        )
    case false:
      return null;
  }
}

export { VerifyIconHtml }; 