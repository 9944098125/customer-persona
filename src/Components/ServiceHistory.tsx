import React from "react";
import { useCustomer } from "../Context/CustomerContext";

const ServiceHistory: React.FC = () => {
	const { selectedCustomer } = useCustomer();

	if (!selectedCustomer) return null;

	return (
		<div className="p-2 bg-white shadow-md rounded-lg">
			<h2 className="text-xl text-violet-700 underline font-bold mb-4">
				Service History
			</h2>
			<ul className="p-2">
				{selectedCustomer.serviceHistory.map((service, index) => (
					<li className="shadow-xl rounded-lg p-2" key={index}>
						<p className="text-violet-500 text-lg font-bold">
							Ticket ID:{" "}
							<span className="text-black font-semibold text-lg">
								{service.ticketId}
							</span>
						</p>
						<p className="text-violet-500 text-lg font-bold">
							Issue:{" "}
							<span className="text-black font-semibold text-lg">
								{service.issue}
							</span>
						</p>
						<p className="text-violet-500 text-lg font-bold">
							Resolution:{" "}
							<span className="text-black font-semibold text-lg">
								{service.resolution}
							</span>
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ServiceHistory;
