import React from 'react'

function SkillsImages({ src, className }) {
    return (
        <img src={src} alt="" className={`${className ? className : 'w-12 h-12  md:w-16 md:h-16'}`} />
    )
}

export default SkillsImages
