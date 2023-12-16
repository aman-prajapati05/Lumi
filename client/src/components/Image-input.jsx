import React, { useState, useRef } from "react";

const ImageDropInput = () => {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveClick = (e) => {
    e.stopPropagation();
    setImage(null);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 p-10">
      <div className="border-2 border-dashed border-gray-600 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <div
            className="flex flex-col items-center w-30 h-40 p-4 cursor-pointer relative"
            onClick={handleUploadClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {image ? (
              <>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  className="absolute top-0 right-0 m-2 text-white text-2xl leading-none hover:text-red-600 focus:outline-none"
                  onClick={handleRemoveClick}
                >
                  ×
                </button>
              </>
            ) : (
              <p className="text-gray-400">
                Drag an image here or click to upload
              </p>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleInputChange}
              ref={fileInputRef}
              className="hidden"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here"
            className="p-2 bg-transparent border text-white border-gray-600 rounded-lg "
          />
          <button
            className="w-full text-white p-2 rounded-full flex items-center justify-center focus:outline-none"
            onClick={console.log("Photo Uploaded")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageDropInput;
