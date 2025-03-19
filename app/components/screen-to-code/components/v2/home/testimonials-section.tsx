import React from "react";

export const TestimonialsSection = () => (
  <section className="container mx-auto px-4 py-8 mb-12">
    <div className="bg-gray-100 rounded-xl p-8">
      <div className="flex items-center justify-center mb-2">
        <i className="fas fa-comment text-blue-500 mr-2"></i>
        <span className="text-sm">Testimonials</span>
      </div>
      <h2 className="text-2xl font-bold text-center mb-6">
        Real feedback from our
        <br />
        satisfied clients
      </h2>

      <div className="bg-blue-600 text-white p-6 rounded-xl max-w-lg mx-auto relative">
        <div className="flex items-center mb-4">
          <img
            src="https://placehold.co/100x100/png?text=Client"
            alt="Female client testimonial avatar"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="font-bold">Realistic turned our house hunt into a</p>
            <p>smooth and enjoyable experience.</p>
            <p>Perfect for anyone looking to buy</p>
            <p>their first home!</p>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-bold">Annie Smith</p>
          <p>First-time buyer</p>
        </div>
        <button className="absolute right-4 bottom-4 bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center">
          <i className="fas fa-arrow-right text-white"></i>
        </button>
      </div>

      <div className="flex justify-center mt-6">
        <span className="h-1 w-6 bg-blue-500 rounded-full mx-1"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full mx-1"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full mx-1"></span>
        <span className="h-1 w-6 bg-gray-300 rounded-full mx-1"></span>
      </div>
    </div>
  </section>
);
