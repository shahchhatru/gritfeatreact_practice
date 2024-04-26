import "./App.css";
import {CommentsContainer, CommentsHeader} from '../components/ui'

function App() {
  return (
    <section className="w-full bg-red-300  min-h-screen grid grid-cols-12 poppins-light">
      <div className=" col-start-1 col-end-13 md:col-start-4 md:col-end-10 min-h-full bg-red-600 grid grid-cols-12 grid-rows-12">
        <div className="rounded-md col-start-2 col-end-12 md:col-start-4 md:col-end-10 bg-white m-4 row-start-2 row-end-13 grid grid-rows-10 grid-cols-12 pl-8">
          <div className="row-start-1 col-span-12 grid grid-cols-12">
            {/* <!-- comments-header --> */}
            <CommentsHeader/>
          </div>
          {/* <!-- comments-container --> */}
          <CommentsContainer/>

        </div>
        
      </div>
    </section>
  );
}

export default App;
