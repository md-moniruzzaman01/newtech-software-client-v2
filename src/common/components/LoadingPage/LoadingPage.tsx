import "./style.css";

const LoadingPage = () => {
  return (
    <div className="min-h-screen w-full z-10 flex flex-col justify-center items-center ">
      <div className="">
        <h1 className="text-xl font-medium">
          LOADING
          <span className="dot dot_one"> .</span>
          <span className="dot dot_two"> .</span>
          <span className="dot dot_three"> .</span>
        </h1>
      </div>
    </div>
  );
};

export default LoadingPage;
