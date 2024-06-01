import React from "react";
import { useCustomer } from "../Context/CustomerContext";

const LoyaltyProgram: React.FC = () => {
	const { selectedCustomer } = useCustomer();

	if (!selectedCustomer || !selectedCustomer.loyaltyProgram.transactions.length)
		return <div>No loyalty program history available</div>;

	return (
		<div className="p-2 bg-white shadow-md rounded-lg">
			<h2 className="text-xl text-violet-700 underline font-bold mb-4">
				Loyalty Program
			</h2>
			<p className="text-violet-700 text-lg font-bold">
				Current Points:{" "}
				<span className="text-lg font-semibold text-black">
					{selectedCustomer.loyaltyProgram.currentPoints}
				</span>
			</p>
			<ul className="p-2">
				{selectedCustomer.loyaltyProgram.transactions.map(
					(transaction, index) => (
						<li className="shadow-xl p-2" key={index}>
							<p className="text-violet-500 text-lg font-bold">
								Transaction Date:{" "}
								<span className="text-black font-semibold text-lg">
									{transaction.transactionDate}
								</span>
							</p>
							<p className="text-violet-500 text-lg font-bold">
								Points Earned:{" "}
								<span className="text-black font-semibold text-lg">
									{transaction.pointsEarned}
								</span>
							</p>
							<p className="text-violet-500 text-lg font-bold">
								Points Redeemed:{" "}
								<span className="text-black font-semibold text-lg">
									{transaction.pointsRedeemed}
								</span>
							</p>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default LoyaltyProgram;
