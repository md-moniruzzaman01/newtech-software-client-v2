import Button from "../../common/components/Button";

const Error = () => {
  const goBack = () => {
    window.history.back(); // Go back to the previous page
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-4">
          Error 404
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Oops! Something went wrong.
        </p>
        <Button onClick={goBack} className="w-full" danger>
          Go to Home Page
        </Button>
      </div>
    </div>
  );
};

export default Error;
