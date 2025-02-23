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
			"https://media.istockphoto.com/id/1293444908/photo/confident-female-politician-against-american-flag.jpg?s=612x612&w=0&k=20&c=L3Mb3IFI5uhgFI8FbFPZVwfQjE1_poI3EW2hzB07z_k=",
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
			"https://img.freepik.com/premium-photo/stunning-portrait-businessperson-with-official-attire_884630-3103.jpg",
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
			"https://t3.ftcdn.net/jpg/06/54/78/10/360_F_654781076_3N6A76rZdBvjbqiIAr0lkrRpoxxwW1jB.jpg",
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
			"https://t4.ftcdn.net/jpg/04/17/35/77/360_F_417357764_9M4EAbThf0relVqWcrfi54w2JcwH3RR3.jpg",
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
			"https://media.istockphoto.com/id/1473968774/photo/portrait-of-successful-businessman-in-office-man-in-shirt-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=MMKkbVA8bSPqmWbl5T31MLJofWSdOvwetkmi4kT5G7U=",
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
