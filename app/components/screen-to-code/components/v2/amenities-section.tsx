import React from "react";

export const AmenitiesSection = () => {
	return <section className="container mx-auto px-4 py-8 mb-12">
		<div className="flex items-center mb-2">
			<i className="fas fa-star text-blue-500 mr-2"></i>
			<span className="text-sm">Amenities</span>
		</div>
		<h2 className="text-2xl font-bold mb-6">
			Discover exceptional amenities
			<br/>
			for a luxurious lifestyle
		</h2>

		<div className="relative">
			<img
				src="https://placehold.co/1200x400/png?text=Luxury+Home+With+Pool"
				alt="Luxury modern home with infinity pool and spacious living area"
				className="w-full h-80 object-cover rounded-xl"
			/>

			<div className="absolute right-8 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-xl w-64">
				<div className="font-bold mb-2">Including</div>
				<ul className="space-y-2">
					<li className="flex items-center">
						<i className="fas fa-check-circle mr-2"></i>
						<span>Convenient locality</span>
					</li>
					<li className="flex items-center">
						<i className="fas fa-check-circle mr-2"></i>
						<span>High-speed Internet</span>
					</li>
					<li className="flex items-center">
						<i className="fas fa-check-circle mr-2"></i>
						<span>Full-time security & CCTV</span>
					</li>
					<li className="flex items-center">
						<i className="fas fa-check-circle mr-2"></i>
						<span>Dedicated parking</span>
					</li>
					<li className="flex items-center">
						<i className="fas fa-check-circle mr-2"></i>
						<span>Gym and Sauna</span>
					</li>
				</ul>
			</div>
		</div>
	</section>;
}