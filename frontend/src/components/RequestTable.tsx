import React, { useState } from 'react';

interface Request {
  id: string;
  createdOn: string;
  location: string;
  service: string;
  status: string;
  priority: string;
  department: string;
  requestedBy: string;
  assignedTo: string;
}

const initialRequests: Request[] = [
  {
    id: '1',
    createdOn: '2024-10-01',
    location: 'Location A',
    service: 'Service 1',
    status: 'New',
    priority: 'High',
    department: 'Department A',
    requestedBy: 'User A',
    assignedTo: 'User B',
  },
  {
    id: '2',
    createdOn: '2024-10-02',
    location: 'Location B',
    service: 'Service 2',
    status: 'In Progress',
    priority: 'Medium',
    department: 'Department B',
    requestedBy: 'User C',
    assignedTo: 'User D',
  },
  // Add more initial requests as needed
];

const RequestTable: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [departmentFilter, setDepartmentFilter] = useState<string>('All');
  const [requests, setRequests] = useState<Request[]>(initialRequests);

  // Function to filter requests based on status and department
  const filteredRequests = requests.filter((request) => {
    const statusMatch =
      statusFilter === 'All' || request.status === statusFilter;
    const departmentMatch =
      departmentFilter === 'All' || request.department === departmentFilter;
    return statusMatch && departmentMatch;
  });

  // Function to handle the Edit button click
  const handleEdit = (id: string) => {
    console.log('Edit request with ID:', id);
    // You can implement an edit modal or form here
  };

  // Function to handle the Delete button click
  const handleDelete = (id: string) => {
    const updatedRequests = requests.filter((request) => request.id !== id);
    setRequests(updatedRequests);
  };

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
            <option value="Department A">Department A</option>
            <option value="Department B">Department B</option>
            <option value="Department C">Department C</option>
            {/* Add more departments as needed */}
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
            <tr key={request.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.createdOn}</td>
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
                  onClick={() => handleEdit(request.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDelete(request.id)}
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
