// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../types/product';
// Adjust the import based on your project structure

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    // Sample product data
    private products: Product[] = [
        { code: 'P001', name: 'Product A', category: 'Category 1', quantity: 10 },
        { code: 'P002', name: 'Product B', category: 'Category 2', quantity: 20 },
        { code: 'P003', name: 'Product C', category: 'Category 1', quantity: 15 },
        // Add more products as needed
    ];

    constructor() {}

    // Method to get the list of products
    getProductsMini(): Promise<Product[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.products);
            }, 1000); // Simulate a network delay
        });
    }
}
