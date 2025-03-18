import React from "react";

export const FeaturesSection = () => <div className="bg-gray-50 py-16">
	<div className="container mx-auto px-8">
		<div className="text-center">
			<div className="text-sm text-blue-500">Features</div>
			<h2 className="text-2xl font-semibold text-gray-800 mt-2">
				Discover the advantages and <br/> exclusive benefits
			</h2>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
			<div className="text-center">
				<div className="bg-blue-100 text-blue-500 rounded-full p-4 inline-block">
					<i className="fas fa-search"></i>
				</div>
				<h3 className="text-lg font-semibold text-gray-800 mt-4">
					Expert Guidance
				</h3>
				<p className="text-gray-600 mt-2">
					Receive professional insights to make informed real estate
					decisions confidently.
				</p>
			</div>

			<div className="text-center">
				<div className="bg-blue-100 text-blue-500 rounded-full p-4 inline-block">
					<i className="fas fa-sliders-h"></i>
				</div>
				<h3 className="text-lg font-semibold text-gray-800 mt-4">
					Tailored Solutions
				</h3>
				<p className="text-gray-600 mt-2">
					We customize property options based on your specific needs and
					preferences.
				</p>
			</div>

			<div className="text-center">
				<div className="bg-blue-100 text-blue-500 rounded-full p-4 inline-block">
					<i className="fas fa-chart-bar"></i>
				</div>
				<h3 className="text-lg font-semibold text-gray-800 mt-4">
					Market Expertise
				</h3>
				<p className="text-gray-600 mt-2">
					Leverage our deep understanding of market trends for smart
					investments.
				</p>
			</div>

			<div className="text-center">
				<div className="bg-blue-100 text-blue-500 rounded-full p-4 inline-block">
					<i className="fas fa-rocket"></i>
				</div>
				<h3 className="text-lg font-semibold text-gray-800 mt-4">
					Seamless Process
				</h3>
				<p className="text-gray-600 mt-2">
					Enjoy a smooth, stress-free experience from property search to
					final transaction.
				</p>
			</div>

			<div className="text-center">
				<div className="bg-blue-100 text-blue-500 rounded-full p-4 inline-block">
					<i className="fas fa-user"></i>
				</div>
				<h3 className="text-lg font-semibold text-gray-800 mt-4">
					Client Focused
				</h3>
				<p className="text-gray-600 mt-2">
					We prioritize your satisfaction with personalized service
					every step of the perfect way.
				</p>
			</div>

			<div className="text-center">
				<div className="bg-blue-100 text-blue-500 rounded-full p-4 inline-block">
					<i className="fas fa-handshake"></i>
				</div>
				<h3 className="text-lg font-semibold text-gray-800 mt-4">
					Trusted Partners
				</h3>
				<p className="text-gray-600 mt-2">
					Work with a reliable team committed to delivering exceptional
					results for you.
				</p>
			</div>
		</div>
	</div>
</div>;