import React from "react";

export const HeaderBanner = () => {
  return (
    <div className="relative pt-10 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              There should be headline :)
            </h1>
            <p className="text-gray-600 mb-6">
              And there should be subtitles. Have you prepared a message? Please
              fill it here :)
            </p>
            <div className="flex space-x-4">
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none">
                button left
              </button>
              <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
                button right
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400"
              alt="Hero Image"
              className="rounded-lg shadow-md"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
