import React from "react";
import { Container } from "@mui/material";
import { Metadata } from "next";
import { SharedLayout } from "../components/shared-layout";
import { AboutBanner } from "@/app/components/screen-to-code/components/v2/about-banner";
import { AgentList } from "@/app/components/screen-to-code/components/v2/agent-list";
import { AmenitiesSection } from "@/app/components/screen-to-code/components/v2/amenities-section";

export const metadata: Metadata = {
  title: "About | Layout demos",
  description: "About | Layout demos",
};

export default function AboutPage() {
  return (
    <SharedLayout>
      <Container maxWidth="lg">
        <div className="min-h-screen">
          {/* Hero Section */}
          <AboutBanner/>

          {/* Amenities Section */}
          <AmenitiesSection/>

          {/* Agents Section */}
          <AgentList/>

          {/* Testimonials Section */}
          <section className="container mx-auto px-4 py-8 mb-12">
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="flex items-center justify-center mb-2">
                <i className="fas fa-comment text-blue-500 mr-2"></i>
                <span className="text-sm">Testimonials</span>
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">
                Real feedback from our
                <br/>
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
                    <p className="font-bold">
                      Realistic turned our house hunt into a
                    </p>
                    <p>smooth and enjoyable experience.</p>
                    <p>Perfect for anyone looking to buy</p>
                    <p>their first home!</p>
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-bold">Annie Smith</p>
                  <p>First-time buyer</p>
                </div>
                <button
                  className="absolute right-4 bottom-4 bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center">
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

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-8 mb-12">
            <div className="bg-blue-600 text-white p-8 rounded-xl text-center">
              <p className="text-sm mb-2">Want to Book a Call?</p>
              <h2 className="text-2xl font-bold mb-4">
                Ready to make your step in real
                <br/>
                state? Book Now.
              </h2>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full">
                View Properties
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <h3 className="text-lg font-bold mb-2">
                  Discover Real state Ideas
                  <br/>
                  from your own Ease!
                </h3>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-blue-500">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-blue-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-blue-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Main Pages</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Properties
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Properties type
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Agents
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Categories
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Other</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Error 404
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        Form Submit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">Copyright ©2024</p>
              <div className="flex space-x-4 text-sm text-gray-600">
                <a href="#" className="hover:text-gray-900">
                  Privacy
                </a>
                <span>•</span>
                <a href="#" className="hover:text-gray-900">
                  Templates
                </a>
              </div>
            </div>
          </footer>
        </div>
        );
      </Container>
    </SharedLayout>
  );
}
