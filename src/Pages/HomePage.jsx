import React from "react";
import WarehouseFilter from "../components/WarehouseFilter";
import WarehouseCard from "../components/WarehouseCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { filteredWarehouses } = useSelector((state) => state.warehouses);

  return (
    <div className="min-h-screen bg-gray-800 px-6 py-24 text-gray-900">
      {/* Warehouse Filter */}
      <div className="mb-12">
        <WarehouseFilter />
      </div>

      {/* Warehouse Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredWarehouses.length > 0 ? (
          filteredWarehouses.map((warehouse) => (
            <WarehouseCard
              key={warehouse.id}
              id={warehouse.id}
              name={warehouse.name}
              city={warehouse.city}
              spaceAvailable={warehouse.space_available}
              type={warehouse.type}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-lg font-medium text-gray-500">
            No warehouses found.
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;