import React from "react";

export const Header = () => {
	return (
		<div className="bg-white py-4 px-8 flex items-center justify-between">
			<div className="text-2xl font-semibold text-gray-800">Realestic</div>
			<div className="space-x-6">
				<a href="#" className="text-gray-600 hover:text-gray-800">
					About
				</a>
				<a href="#" className="text-gray-600 hover:text-gray-800">
					Properties
				</a>
				<a href="#" className="text-gray-600 hover:text-gray-800">
					Agents
				</a>
				<a href="#" className="text-gray-600 hover:text-gray-800">
					Blogs
				</a>
			</div>
			<button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700">
				Contact Us
			</button>
		</div>
	)
};