import { ReactComponent as IconReact } from '../icons/iconReact.svg';
import React from "react"

const VerifyIconReact = ({ react, javascript, }) =>
{
  switch(react)
  {
    case true:
      return (
        <div className="icons__icon-wrapper">
          <div className="svg-wrapper">
            <IconReact/>
          </div>
        </div>
        )
    case false:
      return null;
  }
}

export { VerifyIconReact }; 