import { Customer } from "../types/customerTypes";

export const dummyCustomers: Customer[] = [
	{
		id: "1",
		name: "Mary Joseph",
		email: "mary.doe@example.com",
		phoneNumber: "123-456-7890",
		address: "123 Main St, Anytown, USA",
		dateOfBirth: "1990-01-01",
		profilePicture:
			"https://thumbs.dreamstime.com/b/open-friendly-business-woman-blue-official-suit-stands-her-hands-pockets-white-smiling-wear-pantsuit-background-187468544.jpg",
		salesHistory: [
			{
				productName: "Product 1",
				purchaseDate: "2021-01-01",
				warrantyEndDate: "2022-01-01",
			},
			{
				productName: "Product 2",
				purchaseDate: "2021-02-01",
				warrantyEndDate: "2022-02-01",
			},
		],
		serviceHistory: [
			{ ticketId: "001", issue: "Issue 1", resolution: "Resolved 1" },
			{ ticketId: "002", issue: "Issue 2", resolution: "Resolved 2" },
		],
		interactionHistory: [
			{
				interactionType: "Email",
				date: "2021-01-01",
				notes: "Email interaction 1",
			},
			{
				interactionType: "Phone",
				date: "2021-02-01",
				notes: "Phone interaction 1",
			},
		],
		loyaltyProgram: {
			currentPoints: 100,
			transactions: [
				{ transactionDate: "2021-01-01", pointsEarned: 50, pointsRedeemed: 0 },
				{ transactionDate: "2021-02-01", pointsEarned: 50, pointsRedeemed: 0 },
			],
		},
	},
	{
		id: "2",
		name: "L.monies",
		email: "monie.l@example.com",
		phoneNumber: "123-456-7890",
		address: "123 Main St, Anytown, USA",
		dateOfBirth: "1990-01-01",
		profilePicture:
			"https://thumbs.dreamstime.com/b/young-adult-woman-beige-business-casual-pantsuit-sneakers-sits-squatted-smiling-stylish-female-wear-smart-slyly-over-light-218419880.jpg",
		salesHistory: [
			{
				productName: "Product 1",
				purchaseDate: "2021-01-01",
				warrantyEndDate: "2022-01-01",
			},
			{
				productName: "Product 2",
				purchaseDate: "2021-02-01",
				warrantyEndDate: "2022-02-01",
			},
		],
		serviceHistory: [
			{ ticketId: "001", issue: "Issue 1", resolution: "Resolved 1" },
			{ ticketId: "002", issue: "Issue 2", resolution: "Resolved 2" },
		],
		interactionHistory: [
			{
				interactionType: "Email",
				date: "2021-01-01",
				notes: "Email interaction 1",
			},
			{
				interactionType: "Phone",
				date: "2021-02-01",
				notes: "Phone interaction 1",
			},
		],
		loyaltyProgram: {
			currentPoints: 100,
			transactions: [
				{ transactionDate: "2021-01-01", pointsEarned: 50, pointsRedeemed: 0 },
				{ transactionDate: "2021-02-01", pointsEarned: 50, pointsRedeemed: 0 },
			],
		},
	},
	{
		id: "3",
		name: "Jane Moriah",
		email: "jane.moriah@example.com",
		phoneNumber: "123-456-7890",
		address: "123 Main St, Anytown, USA",
		dateOfBirth: "1990-01-01",
		profilePicture:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D",
		salesHistory: [
			{
				productName: "Product 1",
				purchaseDate: "2021-01-01",
				warrantyEndDate: "2022-01-01",
			},
			{
				productName: "Product 2",
				purchaseDate: "2021-02-01",
				warrantyEndDate: "2022-02-01",
			},
		],
		serviceHistory: [
			{ ticketId: "001", issue: "Issue 1", resolution: "Resolved 1" },
			{ ticketId: "002", issue: "Issue 2", resolution: "Resolved 2" },
		],
		interactionHistory: [
			{
				interactionType: "Email",
				date: "2021-01-01",
				notes: "Email interaction 1",
			},
			{
				interactionType: "Phone",
				date: "2021-02-01",
				notes: "Phone interaction 1",
			},
		],
		loyaltyProgram: {
			currentPoints: 100,
			transactions: [
				{ transactionDate: "2021-01-01", pointsEarned: 50, pointsRedeemed: 0 },
				{ transactionDate: "2021-02-01", pointsEarned: 50, pointsRedeemed: 0 },
			],
		},
	},
	{
		id: "4",
		name: "Anna Joseph",
		email: "anna.joseph@example.com",
		phoneNumber: "123-456-7890",
		address: "123 Main St, Anytown, USA",
		dateOfBirth: "1990-01-01",
		profilePicture:
			"https://thumbs.dreamstime.com/b/focused-business-woman-blue-official-pantsuit-formal-wear-sitting-black-laptop-wooden-armchair-looks-something-185604878.jpg",
		salesHistory: [
			{
				productName: "Product 1",
				purchaseDate: "2021-01-01",
				warrantyEndDate: "2022-01-01",
			},
			{
				productName: "Product 2",
				purchaseDate: "2021-02-01",
				warrantyEndDate: "2022-02-01",
			},
		],
		serviceHistory: [
			{ ticketId: "001", issue: "Issue 1", resolution: "Resolved 1" },
			{ ticketId: "002", issue: "Issue 2", resolution: "Resolved 2" },
		],
		interactionHistory: [
			{
				interactionType: "Email",
				date: "2021-01-01",
				notes: "Email interaction 1",
			},
			{
				interactionType: "Phone",
				date: "2021-02-01",
				notes: "Phone interaction 1",
			},
		],
		loyaltyProgram: {
			currentPoints: 100,
			transactions: [
				{ transactionDate: "2021-01-01", pointsEarned: 50, pointsRedeemed: 0 },
				{ transactionDate: "2021-02-01", pointsEarned: 50, pointsRedeemed: 0 },
			],
		},
	},
	{
		id: "5",
		name: "Adam Mills",
		email: "adam.mills@example.com",
		phoneNumber: "123-456-7890",
		address: "123 Main St, Anytown, USA",
		dateOfBirth: "1990-01-01",
		profilePicture:
			"https://thumbs.dreamstime.com/b/young-business-woman-blue-official-suit-sits-armchair-sideways-looks-interest-pineapple-holds-young-stylish-185600685.jpg",
		salesHistory: [
			{
				productName: "Product 1",
				purchaseDate: "2021-01-01",
				warrantyEndDate: "2022-01-01",
			},
			{
				productName: "Product 2",
				purchaseDate: "2021-02-01",
				warrantyEndDate: "2022-02-01",
			},
		],
		serviceHistory: [
			{ ticketId: "001", issue: "Issue 1", resolution: "Resolved 1" },
			{ ticketId: "002", issue: "Issue 2", resolution: "Resolved 2" },
		],
		interactionHistory: [
			{
				interactionType: "Email",
				date: "2021-01-01",
				notes: "Email interaction 1",
			},
			{
				interactionType: "Phone",
				date: "2021-02-01",
				notes: "Phone interaction 1",
			},
		],
		loyaltyProgram: {
			currentPoints: 100,
			transactions: [
				{ transactionDate: "2021-01-01", pointsEarned: 50, pointsRedeemed: 0 },
				{ transactionDate: "2021-02-01", pointsEarned: 50, pointsRedeemed: 0 },
			],
		},
	},
	{
		id: "6",
		name: "Julie Robert",
		email: "julie.robert@example.com",
		phoneNumber: "123-456-7890",
		address: "123 Main St, Anytown, USA",
		dateOfBirth: "1990-01-01",
		profilePicture:
			"https://thumbs.dreamstime.com/b/happy-woman-brunette-white-stylish-jacket-sits-poses-modern-oval-chair-laughs-red-smiling-laughing-woman-sexy-186920257.jpg",
		salesHistory: [
			{
				productName: "Product 1",
				purchaseDate: "2021-01-01",
				warrantyEndDate: "2022-01-01",
			},
			{
				productName: "Product 2",
				purchaseDate: "2021-02-01",
				warrantyEndDate: "2022-02-01",
			},
		],
		serviceHistory: [
			{ ticketId: "001", issue: "Issue 1", resolution: "Resolved 1" },
			{ ticketId: "002", issue: "Issue 2", resolution: "Resolved 2" },
		],
		interactionHistory: [
			{
				interactionType: "Email",
				date: "2021-01-01",
				notes: "Email interaction 1",
			},
			{
				interactionType: "Phone",
				date: "2021-02-01",
				notes: "Phone interaction 1",
			},
		],
		loyaltyProgram: {
			currentPoints: 100,
			transactions: [
				{ transactionDate: "2021-01-01", pointsEarned: 50, pointsRedeemed: 0 },
				{ transactionDate: "2021-02-01", pointsEarned: 50, pointsRedeemed: 0 },
			],
		},
	},
	// Add more customers as needed
];
