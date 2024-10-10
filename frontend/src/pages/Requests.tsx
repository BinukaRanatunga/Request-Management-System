// src/pages/Requests.tsx
import React from 'react';
import RequestTable from '../components/RequestTable';
import RequestForm from '../components/RequestForm';

const Requests: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Requests</h1>
      <RequestForm />
    </div>
  );
};

export default Requests;
