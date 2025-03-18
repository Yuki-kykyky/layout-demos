import React from "react";

export const TestimonialsSection = () => <div className="bg-gray-50 py-16">
	<div className="container mx-auto px-8">
		<div className="text-center">
			<div className="text-sm text-blue-500">Testimonials</div>
			<h2 className="text-2xl font-semibold text-gray-800 mt-2">
				Real feedback from our <br/> satisfied clients
			</h2>
		</div>

		<div className="mt-12 relative">
			<div className="bg-blue-500 rounded-3xl p-8 text-white text-center">
				<img
					src="https://placehold.co/80x80"
					alt="A smiling woman"
					className="rounded-full mx-auto mb-4"
				/>
				<p className="text-lg">
					Realestic turned our house hunt into a smooth and enjoyable
					experience. Perfect for anyone looking to buy their first
					home!
				</p>
				<h4 className="text-md font-semibold mt-4">Andy Smith</h4>
				<p className="text-sm">Los Angeles, CA</p>
			</div>
			<div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white cursor-pointer">
				<i className="fas fa-chevron-left"></i>
			</div>
			<div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white cursor-pointer">
				<i className="fas fa-chevron-right"></i>
			</div>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				<div className="w-2 h-2 bg-blue-300 rounded-full"></div>
				<div className="w-2 h-2 bg-blue-100 rounded-full"></div>
				<div className="w-2 h-2 bg-blue-100 rounded-full"></div>
				<div className="w-2 h-2 bg-blue-100 rounded-full"></div>
			</div>
		</div>
	</div>
</div>;