import React from "react";

export const VisionSection = () => <div className="bg-gray-50 py-16">
	<div className="container mx-auto px-8">
		<div className="flex flex-col md:flex-row items-center">
			<div className="md:w-1/2">
				<div className="text-sm text-blue-500">Our Vision</div>
				<h2 className="text-2xl font-semibold text-gray-800 mt-2">
					The values that drive <br/> everything we do
				</h2>
				<button className="bg-gray-900 text-white py-2 px-6 rounded-full mt-6 hover:bg-gray-700">
					Learn more
				</button>
			</div>
			<div className="md:w-1/2 mt-8 md:mt-0">
				<div className="flex items-start mb-6">
					<div className="bg-blue-100 text-blue-500 rounded-full p-2 mr-4">
						<i className="fas fa-home"></i>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							Dream Home
						</h3>
						<p className="text-gray-600">
							Discover your ideal living space with our premium featured
							real estate listings.
						</p>
					</div>
				</div>
				<div className="flex items-start mb-6">
					<div className="bg-blue-100 text-blue-500 rounded-full p-2 mr-4">
						<i className="fas fa-chart-line"></i>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							Smart Investment
						</h3>
						<p className="text-gray-600">
							Secure high-value, future-ready property and investment
							opportunities today.
						</p>
					</div>
				</div>
				<div className="flex items-start">
					<div className="bg-blue-100 text-blue-500 rounded-full p-2 mr-4">
						<i className="fas fa-star"></i>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							Luxury Living
						</h3>
						<p className="text-gray-600">
							Explore exclusive, sophisticated properties tailored to
							your perfect lifestyle.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>;