import React from 'react'
import Heading from './Heading'

interface ImageProps {
    image?: string,
    inside?: boolean,
    title?: string,
    subtitle?: string,
}

const Image: React.FC<ImageProps> = ({
    image,
    inside,
    title,
    subtitle,
}) => {
  return (
    <figure className={`rounded-[10px] overflow-hidden relative`}>
        {image ? 
          (
            <img className='w-full h-[65vh] object-cover' src={image} alt="" />
          ):(
            <div className='w-full h-[65vh] bg-slate-200'>

            </div>
          )
        }
        <figcaption className={` w-full h-full p-5
            ${inside ? "absolute inset-0 flex flex-col justify-center items-start" : "py-[10px]"}
        `}>
            <Heading title={title} subtitle={subtitle}/>
        </figcaption>
    </figure>
  )
}

export default Image