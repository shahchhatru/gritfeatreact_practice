import React from 'react'

interface LikeButtonProps{
    count:number;
    text:string;
    className?:string;
    children:React.ReactNode;
}

const LikeButton:React.FC<LikeButtonProps>=({count,text,className,children})=>{
    return(
        <div className={`flex justify-center items-center gap-1 ${className}`}>
      <span> {count} </span>
      <span>{text}</span>

      <button className="cursor-pointer">
        {children} {/* Render SlLike if no icon provided */}
      </button>
    </div>
    )



}

export default LikeButton