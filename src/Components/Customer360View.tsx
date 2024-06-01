import React from "react";
import CustomerDetails from "./CustomerDetails";
import SalesHistory from "./SalesHistory";
import ServiceHistory from "./ServiceHistory";
import InteractionHistory from "./InteractionHistory";
import LoyaltyProgram from "./LoyaltyProgram";
import { useCustomer } from "../Context/CustomerContext";
import Navbar from "./Navbar";
import { Modal } from "react-bootstrap";
import CustomerImage from "./CustomerImage";

const Customer360View: React.FC = () => {
	const { customers, selectCustomer } = useCustomer();
	const [showModal, setShowModal] = React.useState(false);

	const showCustomerDetails = (id: string) => {
		setShowModal(true);
		selectCustomer(id);
	};

	return (
		<React.Fragment>
			<Navbar />
			<div className="py-10 lg:px-10">
				<div className="px-5 py-10 lg:px-10 flex flex-wrap items-center space-y-4 space-x-5 mb-4">
					{customers.map((customer, idx) => (
						<div
							className={`border-violet-700 border-5 p-2 cursor-pointer ${
								idx % 2 === 0 ? "animate-oneWay1" : "animate-oneWay2"
							}`}
							onClick={() => showCustomerDetails(customer.id)}
							style={{ borderRadius: "50%" }}>
							<img
								src={customer.profilePicture}
								alt=""
								style={{ height: "100px", width: "100px", borderRadius: "50%" }}
							/>
						</div>
					))}
				</div>
				<Modal
					show={showModal}
					onHide={() => setShowModal(false)}
					backdrop="static"
					size="lg">
					<Modal.Header closeButton>
						<Modal.Title>
							<h5 className="text-violet-700 font-bold">Buyer Persona</h5>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div
							id="scrollable-container"
							className="h-[500px] lg:h-[500px] overflow-scroll">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2 bg-gray-100">
								<CustomerDetails />
								<CustomerImage />
								<SalesHistory />
								<ServiceHistory />
								<InteractionHistory />
								<LoyaltyProgram />
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</div>
		</React.Fragment>
	);
};

export default Customer360View;
