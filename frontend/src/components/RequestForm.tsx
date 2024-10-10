// src/components/RequestForm.tsx
import React, { useState } from 'react';

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    requestId: '',
    createdOn: '',
    location: '',
    service: '',
    status: 'NEW',
    priority: 'HIGH',
    department: '',
    requestedBy: '',
    assignedTo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form data to the backend
    console.log('Form Data:', formData);
  };

  const handleReset = () => {
    setFormData({
      requestId: '',
      createdOn: '',
      location: '',
      service: '',
      status: 'NEW',
      priority: 'HIGH',
      department: '',
      requestedBy: '',
      assignedTo: '',
    });
  };

  return (
    <div className="container mx-auto ">
    <form onSubmit={handleSubmit} className="p-10 space-y-5 bg-white rounded shadow-md ">
      {/* Request ID */}
      <div >
        <label htmlFor="requestId" className="block text-sm font-medium text-gray-700">Request ID</label>
        <input
          type="text"
          name="requestId"
          value={formData.requestId}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Created On */}
      <div>
        <label htmlFor="createdOn" className="block text-sm font-medium text-gray-700">Created On</label>
        <input
          type="date"
          name="createdOn"
          value={formData.createdOn}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Status */}
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="NEW">New</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="ESCALATED">Escalated</option>
          <option value="ON_HOLD">On Hold</option>
        </select>
      </div>

      {/* Priority */}
      <div>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>

      {/* Department */}
      <div>
        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Requested By */}
      <div>
        <label htmlFor="requestedBy" className="block text-sm font-medium text-gray-700">Requested By</label>
        <input
          type="text"
          name="requestedBy"
          value={formData.requestedBy}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Assigned To */}
      <div>
        <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned To</label>
        <input
          type="text"
          name="assignedTo"
          value={formData.assignedTo}
          onChange={handleChange}
          className="mt-1 border rounded w-full py-2 px-3 focus:ring focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Submit and Reset Buttons */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </form>
    </div>
  );
};

export default RequestForm;
