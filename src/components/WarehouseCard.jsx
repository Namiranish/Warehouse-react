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
    <Link to={`/warehouse/${id}`}>
      <div
        className="bg-indigo-700 hover:bg-indigo-800 transform hover:scale-105 hover:shadow-2xl shadow-md rounded-lg p-5 mb-5 cursor-pointer transition-all flex flex-col justify-between"
        onClick={handleCardClick}
      >
        {/* Warehouse Name */}
        <h2 className="text-2xl font-bold text-white text-center">{name}</h2>

        {/* City and Type */}
        <div className="flex justify-between mt-4">
          <p className="text-gray-300 text-sm">{city}</p>
          <p className="text-gray-300 font-medium text-sm">{type}</p>
        </div>

        {/* Space Available */}
        <div className="mt-auto">
          <p className="text-gray-300 text-sm">
            Available Space: <span className="font-semibold text-white">{spaceAvailable} sq. ft.</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default WarehouseCard;
