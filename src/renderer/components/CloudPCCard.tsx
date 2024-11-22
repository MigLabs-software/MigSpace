import React from 'react';

const CloudPCCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-info">
        <h2>Cloud PC Name</h2>
        <p>Status: Online</p>
      </div>
      <button className="launch-button">Launch</button>
    </div>
  );
};

export default CloudPCCard;