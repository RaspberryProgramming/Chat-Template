import './css/App.css';
import Messages from './components/Messages';
import UserList from './components/UserList';
import SettingsButton from './components/SettingsButton';
import SettingsModal from './components/SettingsModal';
import React, { useState } from 'react';

function App() {
  let users = ["Bob", "Sean", "Cheeseits"];
  const [settingsEnabled, setSettingsEnabled] = useState(false);

  return (
    <div className="App">
      <div className="col W-20">
        <UserList users={users}/>
        <SettingsButton onClick={()=>{setSettingsEnabled(!settingsEnabled)}}/>
        <SettingsModal enabled={settingsEnabled} toggle={()=>{setSettingsEnabled(!settingsEnabled)}}/>
      </div>
      <div className="col W-80">
        <Messages />
        <input/>
      </div>
    </div>
  );
}

export default App;
