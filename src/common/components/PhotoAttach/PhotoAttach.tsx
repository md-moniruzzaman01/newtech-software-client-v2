import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { IoImageOutline } from "react-icons/io5";
import { PhotoAttachProps } from "./type";
import Button from "../Button";

const PhotoAttach: React.FC<PhotoAttachProps> = ({
  borderColor = "border-borderColor",
  droppedImage,
  setDroppedImage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [{ isOver }, drop] = useDrop({
    accept: "IMAGE",
    drop: (item: { image: string }) => {
      if (setDroppedImage) {
        setDroppedImage(item.image);
      }
    },
    collect: (monitor) => ({
      isOver: !monitor.isOver(),
    }),
  });

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          if (setDroppedImage) {
            setDroppedImage(reader.result as string);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    if (setDroppedImage) {
      setDroppedImage(undefined); // Clear the dropped image
    }
  };

  return (
    <div
      ref={drop}
      className={`${borderColor} border-dashed border-2 min-h-48 flex justify-center items-center ${
        isOver ? "bg-gray-100" : ""
      }`}
    >
      {droppedImage ? (
        <div>
          <div className="absolute right-7 ">
            <Button link onClick={handleCancel}>
              Cancel
            </Button>
          </div>
          <img
            src={droppedImage} // Display the attached image
            alt="Attached"
            className="max-h-48"
          />
        </div>
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
            ref={fileInputRef} // Assign the ref to the file input element
          />
          <div className="text-center">
            <div className="flex justify-center">
              <IoImageOutline className="text-4xl text-blue-500" />
            </div>
            <p
              onClick={() => {
                // Trigger the hidden file input when the component is clicked
                fileInputRef.current?.click();
              }}
              className="font-medium cursor-pointer hover:underline hover:text-shadeOfBlue"
            >
              Drop to attach Image
            </p>
            <p className="text-sm text-shadeOfGray">Maximum file size 50 MB</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoAttach;
