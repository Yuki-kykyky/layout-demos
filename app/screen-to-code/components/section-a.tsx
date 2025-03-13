import React from "react";

export const SectionA = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
          This is the Section A part title
        </h2>
        <p className="text-gray-600 text-center mb-8">
          And this will be the subtitle, let&apos;s write something here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">Copy Paste from Figma</p>
            <p className="text-gray-600">
              Install the Figma plugin and you&apos;re ready to convert your
              designs to a responsive site.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400"
              alt="Section A Image"
              className="rounded-lg shadow-md"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      {/* Card Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x300"
              alt="Card 1 Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Default Title
              </h3>
              <p className="text-gray-600 mb-4">
                there will be filled with card&apos;s description, fill it fill
                it over
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
                Read More
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x300"
              alt="Card 2 Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Hello Piggy
              </h3>
              <p className="text-gray-600 mb-4">
                there will be filled with card&apos;s description, fill it fill
                it over
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
                Read More
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x300"
              alt="Card 3 Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Hello Cute :)
              </h3>
              <p className="text-gray-600 mb-4">
                there will be filled with card&apos;s description, fill it fill
                it over
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
                Read More
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x300"
              alt="Card 4 Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Hello Doggy
              </h3>
              <p className="text-gray-600 mb-4">
                there will be filled with card&apos;s description, fill it fill
                it over
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
                Read More
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x300"
              alt="Card 5 Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Kappa WOW
              </h3>
              <p className="text-gray-600 mb-4">
                there will be filled with card&apos;s description, fill it fill
                it over
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
                Read More
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placehold.co/400x300"
              alt="Card 6 Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Aba Aba
              </h3>
              <p className="text-gray-600 mb-4">
                there will be filled with card&apos;s description, fill it fill
                it over
              </p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none mr-4">
            button left
          </button>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-900 focus:outline-none">
            button right
          </button>
        </div>
      </div>
    </div>
  );
};
