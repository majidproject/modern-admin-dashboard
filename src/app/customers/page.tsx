import CustomersTable from "@/components/customers/CustomersTable";

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Customers</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          View and manage your customer base.
        </p>
      </div>

      <CustomersTable />
    </div>
  );
}