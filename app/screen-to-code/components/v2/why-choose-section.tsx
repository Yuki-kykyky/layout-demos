import React from "react";

export const WhyChooseSection = () => <div className="bg-white py-16">
	<div className="container mx-auto px-8">
		<div>
			<div className="text-sm text-blue-500">Why choose us</div>
			<h2 className="text-2xl font-semibold text-gray-800 mt-2">
				What makes us the right partner for <br/> your real estate?
			</h2>
		</div>

		<div className="mt-12 relative">
			<img
				src="https://placehold.co/1920x600"
				alt="A modern house interior with large windows"
				className="w-full object-cover rounded-3xl"
			/>
			<div
				className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-3xl p-8 w-full max-w-md">
				<div className="flex items-start mb-4">
					<i className="fas fa-check text-green-500 mr-2"></i>
					<div>
						<h4 className="text-lg font-semibold text-gray-800">
							Expert Local Knowledge
						</h4>
						<p className="text-gray-600">
							Extensive experience and insights into the perfect local
							market.
						</p>
					</div>
				</div>
				<div className="flex items-start mb-4">
					<i className="fas fa-check text-green-500 mr-2"></i>
					<div>
						<h4 className="text-lg font-semibold text-gray-800">
							Personalized Service
						</h4>
						<p className="text-gray-600">
							Customized solutions for a smooth, tailored experience.
						</p>
					</div>
				</div>
				<div className="flex items-start">
					<i className="fas fa-check text-green-500 mr-2"></i>
					<div>
						<h4 className="text-lg font-semibold text-gray-800">
							Proven Track Record
						</h4>
						<p className="text-gray-600">
							A history of 100+ successful projects and satisfied
							clients.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>;