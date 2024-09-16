import { Product } from "./product.ts";

export type Contact = {
	id: string;
	name: string;
	products: Product[];
};
