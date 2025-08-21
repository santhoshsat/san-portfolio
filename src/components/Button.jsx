import React from 'react'
import PropTypes from 'prop-types';

const ButtonPrimary = ({
    href,
    target,
    label,
    icon,
    classes,
    download // 👈 add this
}) => {
    if (href) {
        return (
            <a 
              href={href}
              target={target}
              download={download ? true : undefined} // 👈 enable download
              className={"btn btn-primary " + (classes || "")}
            >
              {label}
              {icon ? (
                <span className="material-symbols-rounded" aria-hidden="true">
                  {icon}
                </span>
              ) : null}
            </a>
        );
    } else {
        return (
            <button className={"btn btn-primary " + (classes || "")}>
              {label}
              {icon ? (
                <span className="material-symbols-rounded" aria-hidden="true">
                  {icon}
                </span>
              ) : null}
            </button>
        );
    }
};

ButtonPrimary.PropTypes={
 label:PropTypes.string.isRequired,
 href:PropTypes.string,
 target:PropTypes.string,
 icon:PropTypes.string,
 classes:PropTypes.string
}

const ButtonOutline = ({
    href,
    target,
    label,
    icon,
    classes
}) => {
    if (href){
  return (
    <a href={href}
    target={target}
    className={'btn btn-outline'+classes}
    >
    {label}
    {icon ? 
    <span className="material-symbols-rounded"
    aria-hidden='true'>
        {icon}
    </span>
    :undefined
    }
    </a>
  )
}else{
    return(
<button className={"btn btn-outline "+classes}>
    {label}
    {icon ? 
    <span className="material-symbols-rounded"
    aria-hidden='true'>
        {icon}
    </span>
    :undefined
    }
</button>
    )
}
}
ButtonOutline.PropTypes={
 label:PropTypes.string.isRequired,
 href:PropTypes.string,
 target:PropTypes.string,
 icon:PropTypes.string,
 classes:PropTypes.string
}
export {
ButtonPrimary,ButtonOutline
} 