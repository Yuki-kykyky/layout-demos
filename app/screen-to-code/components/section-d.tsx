import React from "react";
export const SectionD = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
          This is the Section D part title
        </h2>
        <p className="text-gray-600 text-center mb-8">
          And this will be the subtitle, let&apos;s write something here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://placehold.co/400x300"
              alt="Sheep 1 Image"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sheep 1
            </h3>
            <p className="text-gray-600">
              Sheep plans to sleep... one sheep, two sheep...
            </p>
          </div>
          {/* Item 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://placehold.co/400x300"
              alt="Sheep 2 Image"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sheep 2
            </h3>
            <p className="text-gray-600">
              Sheep plans to sleep... one sheep, two sheep, three sheep...
            </p>
          </div>
          {/* Item 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src="https://placehold.co/400x300"
              alt="Sheep 3 Image"
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Sheep 3
            </h3>
            <p className="text-gray-600">
              Sheep plans to sleep... one sheep, four sheep, eight sheep...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
