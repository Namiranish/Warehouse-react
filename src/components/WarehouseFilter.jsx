import React, { useState } from 'react';
import warehousesData from '../warehouses.json';
import { useDispatch } from 'react-redux';
import { searchByName, filterWarehouses } from '../features/warehouses/warehousesSlice';

const WarehouseFilter = ({ warehouses, onFilter }) => {
  const [city, setCity] = useState('');
  const [cluster, setCluster] = useState('');
  const [spaceLimit, setSpaceLimit] = useState('');

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(filterWarehouses({ city, cluster, spaceLimit }));
  };

  const handleSearch = (e) => {
    const warehouseName = e.target.value.toLowerCase();
    dispatch(searchByName(warehouseName));
  };

  return (
    <div className="bg-indigo-800 p-8 rounded-2xl shadow-2xl">
      <div className="flex flex-wrap justify-between gap-6">
        {/* Search by Name */}
        <div className="w-full sm:w-1/2">
          <input
            type="text"
            placeholder="Search by Warehouse Name"
            onChange={(e) => handleSearch(e)}
            className="p-4 border border-gray-500 rounded-lg w-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-5 w-full sm:w-auto">
          {/* City Filter */}
          <select
            value={city}
            onChange={(e) => {
              if (e.target.value === 'City') setCity('');
              else setCity(e.target.value);
            }}
            className="p-4 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option selected>City</option>
            {warehousesData.map((warehouse) => (
              <option key={warehouse.id}>{warehouse.city}</option>
            ))}
          </select>

          {/* Cluster Filter */}
          <select
            value={cluster}
            onChange={(e) => {
              if (e.target.value === 'Cluster') setCluster('');
              else setCluster(e.target.value);
            }}
            className="p-4 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option selected>Cluster</option>
            {warehousesData.map((warehouse) => (
              <option key={warehouse.id}>{warehouse.cluster}</option>
            ))}
          </select>

          {/* Space Available Filter */}
          <select
            value={spaceLimit}
            onChange={(e) => {
              if (e.target.value === 'Space Available') setSpaceLimit('');
              else setSpaceLimit(e.target.value);
            }}
            className="p-4 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option selected>Space Available</option>
            {warehousesData.map((warehouse) => (
              <option key={warehouse.id}>{warehouse.space_available}</option>
            ))}
          </select>

          {/* Apply Filter Button */}
          <button
            onClick={handleFilter}
            className= " cursor-pointer bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarehouseFilter;
