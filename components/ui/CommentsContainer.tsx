import CommentBox from "./CommentBox";

export default function CommentsContainer() {
  return (
    <div
      className="col-start-1 col-end-13 mx-2
    row-start-3 row-end-10  min-h-full grid grid-cols-12 grid-rows-12"
    >
      <CommentBox
        time={12}
        postText={"Hello , I am laura a new kpop model"}
        imgsrc={
          "https://images.unsplash.com/photo-1597226843607-9428e087f8b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="col-start-1 col-end-12 row-start-1 row-end-5 p-4"
      />
      {/*  */}
      <div className="ml-2 row-start-2 row-end-13 col-start-2 border-l-2 border-l-gray-300"></div>
    </div>
  );
}
