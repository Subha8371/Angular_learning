export class product {
    name: string | undefined;
    discountPrice?: number;
    price!: number;
    items_left!: number;
    imageURL!: string;
    is_in_inventory!: boolean;
  };