import React from "react";

export const Footer = () => <div>

	<div className="bg-gray-50 py-8">
		<div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
			<div className="text-gray-600">
				<h4 className="text-md font-semibold text-gray-800 mt-2">
					Discover Real state Ideas <br/> from your own Ease!
				</h4>
				<div className="mt-4 space-x-4">
					<a href="#" className="hover:text-blue-500">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="#" className="hover:text-blue-500">
						<i className="fab fa-linkedin-in"></i>
					</a>
					<a href="#" className="hover:text-blue-500">
						<i className="fab fa-twitter"></i>
					</a>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 md:mt-0">
				<div>
					<h4 className="text-md font-semibold text-gray-800">
						Quick Links
					</h4>
					<ul className="mt-2 space-y-1">
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Our Agents
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Contact Us
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								FAQ
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="text-md font-semibold text-gray-800">
						Main Pages
					</h4>
					<ul className="mt-2 space-y-1">
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Properties
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Properties type
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Bedrooms
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Blogs
							</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 className="text-md font-semibold text-gray-800">Other</h4>
					<ul className="mt-2 space-y-1">
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Error 404
							</a>
						</li>
						<li>
							<a href="#" className="text-gray-600 hover:text-blue-500">
								Form Submit
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div className="bg-gray-100 py-4">
		<div className="container mx-auto px-8 flex justify-between items-center text-gray-600 text-sm">
			<div>Copyright @2024</div>
			<div>Framer + Templates</div>
		</div>
	</div>
</div>;