import React from "react";

export const HorizontalCardSection = () => <div className="bg-white py-16">
	<div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
		<div className="md:w-1/2">
			<img
				src="https://placehold.co/600x400"
				alt="A smiling real estate agent in a suit"
				className="rounded-3xl"
			/>
		</div>
		<div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
			<h3 className="text-2xl font-semibold text-gray-800">
				At Realestic,
			</h3>
			<p className="text-gray-600 mt-4">
				Our mission is simple: to provide you with the best real estate
				solutions, tailored to meet your needs. We understand that
				finding the perfect property is more than just a transaction;
				it&apos;s about creating a space where life happens. Our
				dedicated team combines industry expertise.
			</p>
			<div className="mt-6">
				<img
					src="https://placehold.co/150x50/ffffff/000000?text=Signature"
					alt="A digital signature"
					className="h-8"
				/>
			</div>
		</div>
	</div>
</div>;