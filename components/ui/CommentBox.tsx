import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { BsChat } from "react-icons/bs";
import LikeButton from './LikeButton'
import { SlLike } from "react-icons/sl";


interface CommentsBoxProps{
    postText:string;
    time:number;
    className?:string;
    imgsrc?:string;
    
} 

const CommentBox:React.FC<CommentsBoxProps> = ({postText,time,className,imgsrc}) => {
  return (
    <div className={`w-full min-h-48 flex rounded-md   ${className}`}>
        {/* img-conatiner */}
        <div className="w-1/6 rounded-md">
          <img
            src={imgsrc}
            className="w-16 h-16 rounded-full border-4 relative top-0"
          />
        </div>

        <div className="w-5/6 grid grid-cols-11 grid-rows-8 bg-stone-100 rounded-md py-2">
          <div className="text-gray-500 col-start-1 col-end-12 pl-4 flex justify-between">
            <span>{time} mins</span>
            <span className=" mr-4 cursor-pointer text-gray-400">
              <HiDotsHorizontal />
            </span>
          </div>
          {/* chattextbox */}
          <div className="grid grid-rows-4 col-start-1 col-end-12 row-start-3 row-end-9">
            {/* msg box */}
            <div className="row-span-3 w-full overflow-hidden rounded-md border-1 p-4">
             {postText}
            </div>
            <div className="h-1/8 grid grid-cols-11">
            <LikeButton count={15} text={"Likes"} className="col-start-2 col-end-5 text-gray-500">
              <SlLike/>
            </LikeButton>
           <LikeButton count={6} text={"Replies"} className="col-start-7 col-end-11 text-gray-500">
            <BsChat/>
           </LikeButton>

            </div>
            </div>
          </div>

        </div>
  )
}

export default CommentBox