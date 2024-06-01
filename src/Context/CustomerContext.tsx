import React, { createContext, useState, useContext, ReactNode } from "react";
import { Customer } from "../types/customerTypes";
import { dummyCustomers } from "./customerData";

interface CustomerContextProps {
	customers: Customer[];
	selectedCustomer: Customer | null;
	selectCustomer: (customerId: string) => void;
}

const CustomerContext = createContext<CustomerContextProps | undefined>(
	undefined
);

interface CustomerProviderProps {
	children: ReactNode;
}

export const CustomerProvider: React.FC<CustomerProviderProps> = ({
	children,
}) => {
	const [customers] = useState<Customer[]>(dummyCustomers);
	const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
		null
	);

	const selectCustomer = (customerId: string) => {
		const customer =
			customers.find((customer) => customer.id === customerId) || null;
		setSelectedCustomer(customer);
	};

	return (
		<CustomerContext.Provider
			value={{ customers, selectedCustomer, selectCustomer }}>
			{children}
		</CustomerContext.Provider>
	);
};

export const useCustomer = (): CustomerContextProps => {
	const context = useContext(CustomerContext);
	if (!context) {
		throw new Error("useCustomer must be used within a CustomerProvider");
	}
	return context;
};
