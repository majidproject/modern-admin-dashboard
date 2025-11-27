"use client";

import { Edit, Trash2, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  img: string;
}

const PRODUCTS: Product[] = [
  {
    id: "PRD-001",
    name: "Apple Watch Series 9",
    category: "Electronics",
    price: "$399.00",
    stock: 45,
    status: "In Stock",
    img: "https://api.dicebear.com/7.x/shapes/svg?seed=AppleWatch",
  },
  {
    id: "PRD-002",
    name: "Nike Air Max 270",
    category: "Clothing",
    price: "$150.00",
    stock: 8,
    status: "Low Stock",
    img: "https://api.dicebear.com/7.x/shapes/svg?seed=Nike",
  },
  {
    id: "PRD-003",
    name: "Sony WH-1000XM5",
    category: "Electronics",
    price: "$348.00",
    stock: 0,
    status: "Out of Stock",
    img: "https://api.dicebear.com/7.x/shapes/svg?seed=Sony",
  },
  {
    id: "PRD-004",
    name: "Leather Wallet",
    category: "Accessories",
    price: "$45.00",
    stock: 120,
    status: "In Stock",
    img: "https://api.dicebear.com/7.x/shapes/svg?seed=Wallet",
  },
  {
    id: "PRD-005",
    name: "MacBook Pro M3",
    category: "Computers",
    price: "$1,999.00",
    stock: 12,
    status: "In Stock",
    img: "https://api.dicebear.com/7.x/shapes/svg?seed=MacBook",
  },
];

export default function ProductsTable() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Products Inventory
        </h3>
        <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors">
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
            <tr>
              <th className="px-6 py-4 font-medium">Product Name</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Stock</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {PRODUCTS.map((product) => (
              <tr
                key={product.id}
                className="group hover:bg-gray-50 dark:hover:bg-gray-900/50"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">{product.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {product.category}
                </td>
                <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">
                  {product.price}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {product.stock} units
                </td>
                <td className="px-6 py-4">
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border",
                      product.status === "In Stock" &&
                        "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/30 dark:bg-emerald-900/20 dark:text-emerald-400",
                      product.status === "Low Stock" &&
                        "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/30 dark:bg-amber-900/20 dark:text-amber-400",
                      product.status === "Out of Stock" &&
                        "border-red-200 bg-red-50 text-red-700 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400"
                    )}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-emerald-600 dark:hover:bg-gray-800"
                      aria-label="Edit product"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-red-500 dark:hover:bg-gray-800"
                      aria-label="Delete product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}