import React from 'react';

const AccountInformation: React.FC = () => {
  return (
    <div className="account-info">
      <img src="profile-picture.jpg" alt="Profile Picture" />
      <div>
        <p>User Name</p>
        <div className="account-options">
          <button>Sign Out</button>
          <button>Switch Account</button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;