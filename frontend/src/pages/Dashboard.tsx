// src/pages/Dashboard.tsx
import React from 'react';
import Circles from '../components/Circles';
import RequestTable from '../components/RequestTable';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>
      <Circles />
      <RequestTable />
    </div>
  );
};

export default Dashboard;
