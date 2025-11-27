import OrdersTable from "@/components/orders/OrderTable";

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Orders</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage and track all customer orders here.
        </p>
      </div>

      <OrdersTable />
    </div>
  );
}