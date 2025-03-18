import React from "react";

export const HeaderBanner = () => <div className="bg-white py-16">
	<div className="text-center">
		<div className="text-sm text-blue-500">Real Estate</div>
		<h1 className="text-4xl md:text-5xl font-semibold text-gray-800 mt-4">
			Find the home that fits <br/> your life{" "}
			<span className="text-blue-500">perfectly</span>
		</h1>
	</div>
	<div className="mt-12">
		<img
			src="https://placehold.co/1920x600"
			alt="A modern house with a wooden facade and large windows"
			className="w-full object-cover rounded-3xl"
		/>
	</div>
</div>;