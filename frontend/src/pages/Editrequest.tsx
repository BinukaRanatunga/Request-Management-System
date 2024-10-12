// src/components/EditRequestForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditRequestForm: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the request ID from the URL
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

  const [successMessage, setSuccessMessage] = useState(''); // To show success message
  const [errorMessage, setErrorMessage] = useState(''); // To show error message

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Request ID:", id); // Check if the ID is correctly fetched from the URL
  }, [id]);

  // Fetch existing request data based on ID when component mounts
  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/requests/${id}`);
        console.log('Response:', response.data);

        // Format the createdOn date to YYYY-MM-DD
        const formattedData = {
          ...response.data,
          createdOn: new Date(response.data.createdOn).toISOString().slice(0, 10), // Extract YYYY-MM-DD
        };

        setFormData(formattedData);
      } catch (error) {
        setErrorMessage('Error fetching the request data');
        console.error('Error:', error);
      }
    };

    fetchRequestData();
  }, [id]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // If the input is for the createdOn field, we ensure it remains in the correct format
    if (name === "createdOn") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value, // value is already in YYYY-MM-DD format from the input
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert the date to 'YYYY.MM.DD' format before sending to backend
    const formattedDate = formData.createdOn.replace(/-/g, '.');

    try {
      const response = await axios.patch(`http://localhost:5000/api/requests/${id}`, {
        ...formData,
        createdOn: formattedDate, // Convert 'createdOn' to 'YYYY.MM.DD' format
      });
      console.log('Response:', response.data);
      setSuccessMessage('Request updated successfully!');

      // Optionally navigate back to the request list after successful edit
      setTimeout(() => navigate('/requests'), 400);
    } catch (error) {
      console.error('Error updating the request:', error);
      setErrorMessage('Failed to update the request.');
    }
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
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container mx-auto ">
      <form onSubmit={handleSubmit} className="p-10 space-y-5 bg-white rounded shadow-md ">
        {/* Form fields (pre-filled with existing data) */}
        <div>
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

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Update
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

      {/* Success and Error Messages */}
      {successMessage && (
        <div className="mt-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <p>{successMessage}</p>
        </div>
      )}
      {errorMessage && (
        <div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default EditRequestForm;
