"use client"

import Test from "@/component/Test";

// import Texteditor from "@/component/Editors";


const Home = () => {

  return (
    <div className="flex w-full min-h-screen max-h-screen items-center justify-center bg-[--uDBg]">
      <div className=" bg-gray-800 text-[--uDText] 1xl:w-[80%]  xl:w-[80%] text-[16px] py-10 rounded-xl xl:w[80%] lg:w-[80%] md:w-[40%] sm:w-[80%] w-full sm:h-auto h-screen flex flex-col  justify-center">
        <>
          <div className="text-center my-5">
            <h1 className="headerText font-bold  pt-1 text-white">Text Editor</h1>
          </div>
          <div className="w-[100%] mx-auto 2xl:mb-16 mb-5">
          {/* <Texteditor /> */}
          <Test />
          </div>
        </>
      </div>
    </div>
  );
};

export default Home;
