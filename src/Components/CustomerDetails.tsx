import React from "react";
import { useCustomer } from "../Context/CustomerContext";

const CustomerDetails: React.FC = () => {
	const { selectedCustomer } = useCustomer();

	if (!selectedCustomer) return null;

	return (
		<div className="p-4 bg-white shadow-md rounded">
			<h2 className="text-3xl text-violet-700 font-bold mb-4">
				{selectedCustomer.name}
			</h2>
			<p className="text-violet-500 font-bold text-lg">
				Email:{" "}
				<span className="text-blue-700 underline cursor-pointer font-semibold text-lg">
					{selectedCustomer.email}
				</span>
			</p>
			<p className="text-violet-500 font-bold text-lg">
				Phone:{" "}
				<span className="text-black font-semibold text-lg">
					{selectedCustomer.phoneNumber}
				</span>
			</p>
			<p className="text-violet-500 font-bold text-lg">
				Address:{" "}
				<span className="text-black font-semibold text-lg">
					{selectedCustomer.address}
				</span>
			</p>
			<p className="text-violet-500 font-bold text-lg">
				Date of Birth:{" "}
				<span className="text-black font-semibold text-lg">
					{selectedCustomer.dateOfBirth}
				</span>
			</p>
		</div>
	);
};

export default CustomerDetails;
