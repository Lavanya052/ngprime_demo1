// src/app/domain/product.ts
export interface Product {
    code: string;      // Unique code for the product
    name: string;      // Name of the product
    category: string;  // Category of the product
    quantity: number;  // Quantity of the product available
}
