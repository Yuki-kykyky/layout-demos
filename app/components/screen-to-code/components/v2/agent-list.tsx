import React from "react";

export const AgentList = () => {
	return <section className="container mx-auto px-4 py-8 mb-12">
		<div className="flex items-center mb-2">
			<i className="fas fa-user text-blue-500 mr-2"></i>
			<span className="text-sm">Agents</span>
		</div>
		<h2 className="text-2xl font-bold mb-6">
			Meet our exceptional agents
			<br/>
			for a seamless experience
		</h2>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div className="bg-gray-800 rounded-xl overflow-hidden relative">
				<img
					src="https://placehold.co/400x300/png?text=Agent+1"
					alt="Professional male real estate agent in suit"
					className="w-full h-48 object-cover"
				/>
				<div className="p-4 text-white">
					<h3 className="font-bold">Ethan Carter</h3>
					<p className="text-sm text-gray-300">Senior Specialist</p>
				</div>
			</div>
			<div className="bg-gray-800 rounded-xl overflow-hidden relative">
				<img
					src="https://placehold.co/400x300/png?text=Agent+2"
					alt="Professional female real estate agent smiling"
					className="w-full h-48 object-cover"
				/>
				<div className="p-4 text-white">
					<h3 className="font-bold">Sophia Turner</h3>
					<p className="text-sm text-gray-300">Luxury Specialist</p>
				</div>
			</div>
			<div className="bg-gray-800 rounded-xl overflow-hidden relative">
				<img
					src="https://placehold.co/400x300/png?text=Agent+3"
					alt="Professional male real estate agent in business attire"
					className="w-full h-48 object-cover"
				/>
				<div className="p-4 text-white">
					<h3 className="font-bold">Noah Harrison</h3>
					<p className="text-sm text-gray-300">Property Manager</p>
				</div>
			</div>
		</div>
	</section>;
}