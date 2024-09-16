export type Product = {
	id: string;
	name: string;
	description: string;
	comments: Comment[];
	imageUrl: string;
};

export type Comment = {
	id: string;
	author: string;
	content: string;
};
