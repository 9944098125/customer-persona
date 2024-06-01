import React from "react";
import { useCustomer } from "../Context/CustomerContext";

const CustomerImage = () => {
	const { selectedCustomer } = useCustomer();
	if (!selectedCustomer) return null;
	return (
		<React.Fragment>
			<img
				src={selectedCustomer.profilePicture}
				alt=""
				style={{ height: "100%", width: "100%", borderRadius: "12px" }}
			/>
		</React.Fragment>
	);
};

export default CustomerImage;
