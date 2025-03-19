import React from "react";

export const Footer = () => (
  <div className="max-w-7xl mx-auto px-4 pb-8">
    {/* Footer */}
    <footer className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Discover Real state Ideas from your own Ease!
          </h3>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-blue-600">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-blue-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-600">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Our Agents
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Main Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600">
                Properties
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Properties type
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Bedrooms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Other</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600">
                Error 404
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Form Submit
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500">
        <div>Copyright @2024</div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-500">
            Privacy
          </a>
          <span>•</span>
          <a href="#" className="text-gray-500">
            Templates
          </a>
        </div>
      </div>
    </footer>
  </div>
);
