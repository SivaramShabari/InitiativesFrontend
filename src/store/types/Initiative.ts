export interface initiative {
	id?: string;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	startDate: Date;
	endDate: Date;
	status: "CREATED" | "ACTIVE" | "ENDED";
	applauds: Array<string>;
	ownerId: string;
}
