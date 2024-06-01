import React from "react";
import { useCustomer } from "../Context/CustomerContext";

const SalesHistory: React.FC = () => {
	const { selectedCustomer } = useCustomer();

	if (!selectedCustomer || !selectedCustomer.salesHistory.length)
		return <div>No sales history available</div>;

	return (
		<div className="p-2 bg-white shadow-md rounded-lg">
			<h2 className="text-xl text-violet-700 underline font-bold mb-4">
				Sales History
			</h2>
			<ul className="p-2">
				{selectedCustomer.salesHistory.map((sale, index) => (
					<li className="p-2 shadow-xl rounded-lg" key={index}>
						<p className="text-violet-500 font-bold text-lg">
							Product Name:{" "}
							<span className="text-black text-lg font-semibold">
								{sale.productName}
							</span>
						</p>
						<p className="text-violet-500 font-bold text-lg">
							Purchase Date:{" "}
							<span className="text-black text-lg font-semibold">
								{sale.purchaseDate}
							</span>
						</p>
						<p className="text-violet-500 font-bold text-lg">
							Warranty End Date:{" "}
							<span className="text-black text-lg font-semibold">
								{sale.warrantyEndDate}
							</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SalesHistory;
