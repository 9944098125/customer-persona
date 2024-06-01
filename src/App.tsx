import React from "react";
import { CustomerProvider } from "./Context/CustomerContext";
import Customer360View from "./Components/Customer360View";

import "./App.css";

const App: React.FC = () => {
	return (
		<CustomerProvider>
			<div className="">
				<Customer360View />
			</div>
		</CustomerProvider>
	);
};

export default App;
