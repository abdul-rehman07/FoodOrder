import React from 'react'

function Button({ children, textonly, className, ...props }) {
    let CssClasses = textonly ? 'textcss' : 'css';
    CssClasses += ' ' + className;
    return (
        <button className={CssClasses} {...props}>{children}</button>
    )
}

export default Button
