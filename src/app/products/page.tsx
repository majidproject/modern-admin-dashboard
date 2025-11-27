import ProductsTable from "@/components/products/ProductsTable";

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your store inventory and pricing.
        </p>
      </div>

      <ProductsTable />
    </div>
  );
}