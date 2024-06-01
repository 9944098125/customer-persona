import React from "react";
import { useCustomer } from "../Context/CustomerContext";

const InteractionHistory: React.FC = () => {
	const { selectedCustomer } = useCustomer();

	if (!selectedCustomer) return null;

	return (
		<div className="p-2 bg-white shadow-md rounded-lg">
			<h2 className="text-xl text-violet-700 underline font-bold mb-4">
				Interaction History
			</h2>
			<ul className="p-2">
				{selectedCustomer.interactionHistory.map((interaction, index) => (
					<li className="shadow-xl p-2" key={index}>
						<p className="text-violet-500 font-bold text-lg">
							Interaction Type:{" "}
							<span className="text-black font-semibold text-lg">
								{interaction.interactionType}
							</span>
						</p>
						<p className="text-violet-500 font-bold text-lg">
							Date:{" "}
							<span className="text-black font-semibold text-lg">
								{interaction.date}
							</span>
						</p>
						<p className="text-violet-500 font-bold text-lg">
							Notes:{" "}
							<span className="text-black font-semibold text-lg">
								{interaction.notes}
							</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default InteractionHistory;
