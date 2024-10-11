import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Request {
  _id: string;
  requestId: string;
  createdOn: string;
  location: string;
  service: string;
  status: string;
  priority: string;
  department: string;
  requestedBy: string;
  assignedTo: string;
}

const RequestTable: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from backend API on component mount
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/requests');
        setRequests(response.data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  // Function to filter requests based on status and department
  const filteredRequests = requests.filter((request) => {
    const statusMatch = statusFilter === 'All' || request.status === statusFilter;
    const departmentMatch = departmentFilter === 'All' || request.department === departmentFilter;
    return statusMatch && departmentMatch;
  });

  // Function to handle the Edit button click
  const handleEdit = (id: string) => {
    console.log('Edit request with ID:', id);
    // Implement edit logic
  };

  // Function to handle the Delete button click
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/requests/${id}`); // Adjust with your backend API DELETE method
      setRequests(requests.filter((request) => request._id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex justify-between mb-4">
        <div className="flex space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="All">All Status</option>
            <option value="New">New</option>
            <option value="In Progress">In Progress</option>
            <option value="Escalated">Escalated</option>
            <option value="On Hold">On Hold</option>
          </select>

          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="border rounded-md p-2"
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
          </select>
        </div>
      </div>

      {/* Request Table */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#C19C27]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Request ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Created On</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Service</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Department</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Requested By</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Assigned To</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Priority</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredRequests.map((request) => (
            <tr key={request._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.requestId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(request.createdOn).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.location}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.service}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.department}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.requestedBy}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.assignedTo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.priority}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex space-x-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                  onClick={() => handleEdit(request._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDelete(request._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
