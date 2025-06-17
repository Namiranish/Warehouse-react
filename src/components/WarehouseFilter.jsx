import React, { useState } from 'react';
import warehousesData from '../warehouses.json';
import { useDispatch } from 'react-redux';
import { searchByName, filterWarehouses } from '../features/warehouses/warehousesSlice';

const WarehouseFilter = () => {
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

  const resetFilters = () => {
    setCity('');
    setCluster('');
    setSpaceLimit('');
    dispatch(filterWarehouses({ city: '', cluster: '', spaceLimit: '' }));
  };

  const uniqueCities = [...new Set(warehousesData.map((w) => w.city))];
  const uniqueClusters = [...new Set(warehousesData.map((w) => w.cluster))];
  const uniqueSpaces = [...new Set(warehousesData.map((w) => w.space_available))].sort((a, b) => a - b);

  return (
    <div className="bg-gray-900 flex justify-center p-6 rounded-xl shadow-lg overflow-x-auto text-white relative z-10 mt-5">
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search warehouse"
          onChange={handleSearch}
          className="w-full lg:w-122 p-2.5 border border-gray-600 rounded-md bg-gray-800 placeholder-gray-400 text-white focus:ring-2 focus:ring-gray-500 outline-none"
        />

        {/* City Filter */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full lg:w-44 p-2.5 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gray-500 outline-none"
        >
          <option value="">All Cities</option>
          {uniqueCities.map((city, idx) => (
            <option key={idx} value={city}>{city}</option>
          ))}
        </select>

        {/* Cluster Filter */}
        <select
          value={cluster}
          onChange={(e) => setCluster(e.target.value)}
          className="w-full lg:w-44 p-2.5 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gray-500 outline-none"
        >
          <option value="">All Clusters</option>
          {uniqueClusters.map((cl, idx) => (
            <option key={idx} value={cl}>{cl}</option>
          ))}
        </select>

        {/* Space Filter */}
        <select
          value={spaceLimit}
          onChange={(e) => setSpaceLimit(e.target.value)}
          className="w-full lg:w-48 p-2.5 border border-gray-600 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-gray-500 outline-none"
        >
          <option value="">All Space</option>
          {uniqueSpaces.map((space, idx) => (
            <option key={idx} value={space}>{space} sq. ft.</option>
          ))}
        </select>

        {/* Apply Button */}
        <button
          onClick={handleFilter}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          Apply
        </button>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default WarehouseFilter;