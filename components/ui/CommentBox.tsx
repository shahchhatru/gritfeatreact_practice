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

const CommentBox = () => {
  return (
    <div className="relative -top-8 -left-8 w-full min-h-48 flex rounded-md drop-shadow-lg border-2 border-stone-100">
        {/* img-conatiner */}
        <div className="w-1/6 rounded-md">
          <img
            src="data:image/jpeg;base64,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"
            className="w-full rounded-full border-4 relative top-0"
          />
        </div>

        <div className="w-5/6 grid grid-cols-11 grid-rows-8">
          <div className="text-gray-500 col-start-1 col-end-12 pl-4 flex justify-between">
            <span>2 mins</span>
            <span className=" mr-4 cursor-pointer text-gray-400">
              <HiDotsHorizontal />
            </span>
          </div>
          {/* chattextbox */}
          <div className="grid grid-rows-4 col-start-1 col-end-12 row-start-3 row-end-9">
            {/* msg box */}
            <div className="row-span-3 w-full overflow-hidden rounded-md border-1 p-4">
              Hello , I am laura the new kpop star
            </div>
            <div className="h-1/8 grid grid-cols-11">
            <LikeButton count={15} text={"Likes"} className="col-start-1 col-end-4 text-gray-500">
              <SlLike/>
            </LikeButton>
           <LikeButton count={6} text={"Replies"} className="col-start-9 col-end-11 text-gray-500">
            <BsChat/>
           </LikeButton>

            </div>
            </div>
          </div>

        </div>
  )
}

export default CommentBox