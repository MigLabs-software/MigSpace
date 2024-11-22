import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import CSS file for styling
import CloudPCCard from './components/CloudPCCard';
import SettingsButton from './components/SettingsButton';
import AccountInformation from './components/AccountInformation';

const App: React.FC = () => {
  return (
    <div className="app">
      <CloudPCCard />
      <SettingsButton />
      <AccountInformation />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));