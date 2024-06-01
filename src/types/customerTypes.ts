export interface Customer {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
	address: string;
	dateOfBirth: string;
	profilePicture: string;
	salesHistory: SalesHistory[];
	serviceHistory: ServiceHistory[];
	interactionHistory: InteractionHistory[];
	loyaltyProgram: LoyaltyProgram;
}

export interface SalesHistory {
	productName: string;
	purchaseDate: string;
	warrantyEndDate: string;
}

export interface ServiceHistory {
	ticketId: string;
	issue: string;
	resolution: string;
}

export interface InteractionHistory {
	interactionType: string;
	date: string;
	notes: string;
}

export interface LoyaltyProgram {
	currentPoints: number;
	transactions: LoyaltyTransaction[];
}

export interface LoyaltyTransaction {
	transactionDate: string;
	pointsEarned: number;
	pointsRedeemed: number;
}
