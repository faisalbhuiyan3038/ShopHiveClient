export interface IProduct {
    id:              number;
    name:            string;
    description:     string;
    isDeleted:       boolean;
    price:           number;
    productImageUrl: string;
    categoryId:      number;
    category:        ICategory;
}

export interface ICategory {
    id:          number;
    name:        string;
    description: string;
    isDeleted:   boolean;
}
