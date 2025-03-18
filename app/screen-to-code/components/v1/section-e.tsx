import React from "react";

export const SectionE = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-2">
          Frequently Asked Questions as Section E
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Prepare some question and answer here, and check it!
        </p>
        {/* FAQ Item 1 */}
        <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">
              What is Framer?
            </h3>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        {/* FAQ Item 2 */}
        <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">
              Is it easy to learn?
            </h3>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
        {/* FAQ Item 3 */}
        <div className="bg-gray-50 rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-800">
              Do I need to code?
            </h3>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
