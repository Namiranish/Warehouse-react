import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetails } from '../features/warehouses/warehousesSlice';

const WarehouseCard = ({ id, name, city, spaceAvailable, type }) => {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(getDetails(id));
  };

  return (
    <Link to={`/warehouse/${id}`} onClick={handleCardClick}>
      <div className="bg-gray-900 border border-gray-700 hover:border-gray-500 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-5 flex flex-col justify-between h-full cursor-pointer">
        {/* Warehouse Name */}
        <h2 className="text-xl font-semibold text-white text-center">{name}</h2>

        {/* City and Type */}
        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <span className="capitalize">{city}</span>
          <span className="capitalize font-medium">{type}</span>
        </div>

        {/* Space Available */}
        <div className="mt-4">
          <p className="text-sm text-gray-400">
            Available Space: <span className="font-semibold text-white">{spaceAvailable} sq. ft.</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WarehouseCard;