import { ReactComponent as IconCss } from './iconCss.svg';
import React from "react"

const VerifyIconCss = ({ iconCss }) =>
{
  switch(iconCss)
  {
    case true:
      return (
        <div className="icons__icon-wrapper">
          <div className="svg-wrapper">
            <IconCss/>
          </div>
        </div>
        )
    case false:
      return null;
  }
}

export { VerifyIconCss }; 