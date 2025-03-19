import React from "react";

export const HowItWorkSection = () => (
  <div className="mt-16 text-center">
    <div className="text-sm text-blue-600">How it works</div>
    <h2 className="text-3xl font-semibold mt-2">
      Discover the <span className="text-blue-600">advantages</span> and
    </h2>
    <h2 className="text-3xl font-semibold">exclusive benefits</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      <div className="border-l-2 border-blue-600 pl-6 text-left">
        <h3 className="font-semibold text-lg mb-2">Find Your Ideal Property</h3>
        <p className="text-gray-600 text-sm">
          Browse our extensive listings, filter by location, price, and features
          to discover your perfect home
        </p>
      </div>
      <div className="border-l-2 border-blue-600 pl-6 text-left">
        <h3 className="font-semibold text-lg mb-2">Schedule a Viewing</h3>
        <p className="text-gray-600 text-sm">
          Easily book a property tour online at a time that suits you, or
          request a virtual walkthrough
        </p>
      </div>
      <div className="border-l-2 border-blue-600 pl-6 text-left">
        <h3 className="font-semibold text-lg mb-2">Secure Your Deal</h3>
        <p className="text-gray-600 text-sm">
          Make an offer or apply for financing through our website, and let our
          experts guide you
        </p>
      </div>
    </div>
  </div>
);
