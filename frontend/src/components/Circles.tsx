// src/components/Circles.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import RequestForm from "./RequestForm";

interface CircleProps {
  status: string;
  count: number;
  color: "blue" | "red" | "yellow" | "green"; // Predefined colors
}

const Circle: React.FC<CircleProps> = ({ status, count, color }) => {
  const colorClasses = {
    blue: "bg-blue-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    green: "bg-green-600",
  };

  return (
    <div
      className={`rounded-full w-20 h-20 flex items-center justify-center ${colorClasses[color]}`}
    >
      <div className="text-center">
        <p className="text-white font-bold">{count}</p>
        <p className="text-white text-sm">{status}</p>
      </div>
    </div>
  );
};

const Circles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewRequestClick = () => {
    setIsModalOpen(true); // Open modal when clicking the button
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className=" p-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center space-x-2">
          <span>Request</span>
          <button
            className="flex items-center bg-[#830823] text-white px-4 py-2 rounded hover:bg-[#a5373b] hover:shadow-md transition-all duration-300"
            onClick={handleNewRequestClick}
          >
            + New Request
          </button>
        </div>
        <div className="flex justify-end space-x-5">
          <Circle status="New Requests" count={5} color="blue" />
          <Circle status="In Progress" count={3} color="green" />
          <Circle status="Escalated" count={1} color="red" />
          <Circle status="On Hold" count={2} color="yellow" />
        </div>
      </div>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-xl  mb-2">Create New Request</h2>
        <RequestForm />
      </Modal>
    </div>
  );
};

export default Circles;
