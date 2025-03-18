import React from "react";

export const BlogsSection = () => <div className="bg-white py-16">
	<div className="container mx-auto px-8">
		<div>
			<div className="text-sm text-blue-500">Blogs</div>
			<h2 className="text-2xl font-semibold text-gray-800 mt-2">
				Expert advice and market <br/> updates on real estate
			</h2>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
			<div>
				<img
					src="https://placehold.co/600x400"
					alt="A row of modern townhouses"
					className="w-full object-cover rounded-3xl h-64"
				/>
				<div className="mt-4">
					<div className="text-sm text-gray-600">Resources</div>
					<h3 className="text-lg font-semibold text-gray-800 mt-2">
						The ultimate guide to buying your first home
					</h3>
				</div>
			</div>

			<div>
				<img
					src="https://placehold.co/600x400"
					alt="A cozy bedroom with a fireplace"
					className="w-full object-cover rounded-3xl h-64"
				/>
				<div className="mt-4">
					<div className="text-sm text-gray-600">Articles</div>
					<h3 className="text-lg font-semibold text-gray-800 mt-2">
						How to choose the right real estate agent for your needs
					</h3>
				</div>
			</div>

			<div>
				<img
					src="https://placehold.co/600x400"
					alt="A modern living room with minimalist decor"
					className="w-full object-cover rounded-3xl h-64"
				/>
				<div className="mt-4">
					<div className="text-sm text-gray-600">News</div>
					<h3 className="text-lg font-semibold text-gray-800 mt-2">
						Key factors to consider when investing in rental properties
					</h3>
				</div>
			</div>
		</div>
	</div>
</div>;