import { ReactComponent as IconJavascript } from '../icons/iconJavascript.svg';
import React from "react"

const VerifyIconJs = ({ javascript }) =>
{
  switch(javascript)
  {
    case true:
      return (
        <div className="icons__icon-wrapper">
          <div className="svg-wrapper">
            <IconJavascript/>
          </div>
        </div>
        )
    case false:
      return null;
  }
}

export { VerifyIconJs }; 