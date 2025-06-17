import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetails, updateDetails } from '../features/warehouses/warehousesSlice';
import { useNavigate } from 'react-router-dom';
import { FaWarehouse, FaCity, FaCubes, FaThLarge } from 'react-icons/fa';

const WarehouseDetails = () => {
  const { id, name, city, cluster, spaceAvailable, liveStatus } = useSelector(state => state.warehouses.warehouseDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!id || !name || !city || !cluster || !spaceAvailable || !liveStatus) {
      alert('All fields should have a value');
      return;
    }

    dispatch(updateDetails([id, name, city, cluster, spaceAvailable, liveStatus]));
    alert('Warehouse details updated successfully');
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 rounded-2xl shadow-xl text-white mt-25">
      <h2 className="text-3xl font-bold mb-8 text-center text-white-400 flex items-center justify-center gap-3">
        <FaWarehouse className="text-white-400" /> Edit Warehouse
      </h2>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium">Warehouse Name</label>
          <div className="flex items-center gap-3">
            <FaWarehouse className="text-white-500" />
            <input
              type="text"
              value={name}
              onChange={(e) => dispatch(changeDetails(['name', e.target.value]))}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block mb-2 text-sm font-medium">City</label>
          <div className="flex items-center gap-3">
            <FaCity className="text-white-500" />
            <input
              type="text"
              value={city}
              onChange={(e) => dispatch(changeDetails(['city', e.target.value]))}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Cluster */}
        <div>
          <label className="block mb-2 text-sm font-medium">Cluster</label>
          <div className="flex items-center gap-3">
            <FaThLarge className="text-white-500" />
            <input
              type="text"
              value={cluster}
              onChange={(e) => dispatch(changeDetails(['cluster', e.target.value]))}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
        </div>

        {/* Space Available */}
        <div>
          <label className="block mb-2 text-sm font-medium">Space Available (sq. ft.)</label>
          <div className="flex items-center gap-3">
            <FaCubes className="text-white-500" />
            <input
              type="number"
              value={spaceAvailable}
              onChange={(e) => dispatch(changeDetails(['spaceAvailable', e.target.value]))}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
        </div>

        {/* Live Status */}
        <div>
          <label className="block mb-2 text-sm font-medium">Live Status</label>
          <select
            value={liveStatus}
            onChange={(e) => dispatch(changeDetails(['liveStatus', e.target.value]))}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-gray-500"
            required
          >
            <option value="true">Live</option>
            <option value="false">Not Live</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          onClick={handleUpdate}
          className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-all duration-200"
        >
          Update Warehouse
        </button>
      </form>
    </div>
  );
};

export default WarehouseDetails;