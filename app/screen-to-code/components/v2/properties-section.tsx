import React from "react";

export const PropertiesSection = () => <div className="bg-white py-16">
	<div className="container mx-auto px-8">
		<div className="flex items-center justify-between">
			<div>
				<div className="text-sm text-blue-500">Properties</div>
				<h2 className="text-2xl font-semibold text-gray-800 mt-2">
					Ready to buy your dream <br/> home? find it here
				</h2>
			</div>
			<button className="bg-gray-900 text-white py-2 px-6 rounded-full hover:bg-gray-700">
				All properties
			</button>
		</div>

		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
			<div className="rounded-3xl shadow-lg overflow-hidden">
				<div className="relative">
					<img
						src="https://placehold.co/600x400"
						alt="A modern living room with a fireplace"
						className="w-full object-cover h-64"
					/>
					<div className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
						For Sale
					</div>
				</div>
				<div className="p-6">
					<h3 className="text-lg font-semibold text-gray-800">
						Maple Grove
					</h3>
					<p className="text-gray-600 text-sm mt-2">
						4521 Cedar Lane, NY
					</p>
					<div className="flex items-center mt-4 text-gray-600 text-sm">
						<i className="fas fa-bed mr-2"></i> 3
						<i className="fas fa-bath ml-4 mr-2"></i> 2
						<i className="fas fa-ruler-combined ml-4 mr-2"></i> 2,300
						sq.ft
					</div>
				</div>
				<div className="bg-gray-50 py-4 px-6">
					<p className="text-gray-600 text-sm">
						8765 Birchwood Street, CA
					</p>
					<h4 className="text-md font-semibold text-gray-800">
						Birchwood Townhouse
					</h4>
					<div className="flex items-center mt-2 text-gray-600 text-sm">
						<i className="fas fa-bed mr-2"></i> 3
						<i className="fas fa-bath ml-4 mr-2"></i> 2
						<i className="fas fa-ruler-combined ml-4 mr-2"></i> 2,000
						sq.ft
					</div>
				</div>
			</div>

			<div className="rounded-3xl shadow-lg overflow-hidden">
				<div className="relative">
					<img
						src="https://placehold.co/600x400"
						alt="A modern living room with a fireplace"
						className="w-full object-cover h-64"
					/>
					<div className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
						For Rent
					</div>
				</div>
				<div className="p-6">
					<h3 className="text-lg font-semibold text-gray-800">
						Pinecrest Villa
					</h3>
					<p className="text-gray-600 text-sm mt-2">
						4521 Cedar Lane, NY
					</p>
					<div className="flex items-center mt-4 text-gray-600 text-sm">
						<i className="fas fa-bed mr-2"></i> 3
						<i className="fas fa-bath ml-4 mr-2"></i> 2
						<i className="fas fa-ruler-combined ml-4 mr-2"></i> 2,300
						sq.ft
					</div>
				</div>
				<div className="bg-gray-50 py-4 px-6">
					<p className="text-gray-600 text-sm">
						7890 Serenity Avenue, CA
					</p>
					<h4 className="text-md font-semibold text-gray-800">
						Sunset Ridge Retreat
					</h4>
					<div className="flex items-center mt-2 text-gray-600 text-sm">
						<i className="fas fa-bed mr-2"></i> 2
						<i className="fas fa-bath ml-4 mr-2"></i> 2
						<i className="fas fa-ruler-combined ml-4 mr-2"></i> 3,000
						sq.ft
					</div>
				</div>
			</div>

			<div className="rounded-3xl shadow-lg overflow-hidden">
				<div className="relative">
					<img
						src="https://placehold.co/600x400"
						alt="A modern living room with a fireplace"
						className="w-full object-cover h-64"
					/>
					<div className="absolute top-4 left-4 bg-blue-500 text-white py-1 px-3 rounded-full text-sm">
						For Sale
					</div>
				</div>
				<div className="p-6">
					<h3 className="text-lg font-semibold text-gray-800">
						Cedar Heights
					</h3>
					<p className="text-gray-600 text-sm mt-2">
						4521 Cedar Lane, NY
					</p>
					<div className="flex items-center mt-4 text-gray-600 text-sm">
						<i className="fas fa-bed mr-2"></i> 3
						<i className="fas fa-bath ml-4 mr-2"></i> 2
						<i className="fas fa-ruler-combined ml-4 mr-2"></i> 2,300
						sq.ft
					</div>
				</div>
				<div className="bg-gray-50 py-4 px-6">
					<p className="text-gray-600 text-sm">
						7890 Serenity Avenue, CA
					</p>
					<h4 className="text-md font-semibold text-gray-800">
						Serenity Heights
					</h4>
					<div className="flex items-center mt-2 text-gray-600 text-sm">
						<i className="fas fa-bed mr-2"></i> 2
						<i className="fas fa-bath ml-4 mr-2"></i> 3
						<i className="fas fa-ruler-combined ml-4 mr-2"></i> 3,000
						sq.ft
					</div>
				</div>
			</div>
		</div>
	</div>
</div>;