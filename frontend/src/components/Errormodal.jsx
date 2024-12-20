import React from "react";
import { MdError } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";

const Errormodal = () => {
  return (
    <div
      className="  absolute h-full w-full flex items-center justify-center
    top-0
    "
    >
      <div
        className=" border-2 border-black top-[40%] left-44
     w-[50vw] max-w-[500px] bg-white z-10 p-8 flex gap-4 flex-col items-center"
      >
        <MdError className="text-red-500 text-5xl" />
        <h1>There has been an error!!</h1>
        <p>
          Please check your Internet or Reload the
          Page
        </p>
        
          <button onClick={()=>{
            window.location.reload()
          }} className="px-5 py-2 rounded-md bg-sky-500">
            <AiOutlineReload />
          </button>
      </div>
    </div>
  );
};

export default Errormodal;
