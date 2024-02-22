import { IoImageOutline } from "react-icons/io5";

const PhotoAttach = () => {
  return (
    <div className="border-dashed border-2 border-gray-300 min-h-48 flex justify-center items-center">
      <div className="text-center">
        <div className="flex justify-center ">
          <IoImageOutline className=" text-4xl text-blue-500" />
        </div>
        <p className="font-medium">Drop to attach Image</p>
        <p className="text-sm text-gray-400">Maximum file size 50 MB</p>
      </div>
    </div>
  );
};

export default PhotoAttach;
