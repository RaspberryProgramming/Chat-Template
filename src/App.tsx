import './css/App.css';
import Messages from './components/Messages';
import UserList from './components/UserList';
import SettingsButton from './components/SettingsButton';
import SettingsModal from './components/SettingsModal';
import MessageBox from './components/MessageBox';
import Navbar from './components/Navbar';
import NavToggle from './components/NavToggle';
import React, { useState } from 'react';

function App() {
  let users = ["Bob", "Sean", "Cheeseits"];
  const [settingsEnabled, setSettingsEnabled] = useState(false);

  return (
    <div className="App">
      <Navbar>
        <NavToggle toggle={()=>{setSettingsEnabled(!settingsEnabled)}} title="Settings"/>
      </Navbar>
      <div className="columns">
        <div className="col W-20">
          <UserList users={users}/>
          <SettingsButton onClick={()=>{setSettingsEnabled(!settingsEnabled)}}/>
          <SettingsModal enabled={settingsEnabled} toggle={()=>{setSettingsEnabled(!settingsEnabled)}}/>
        </div>
        <div className="col W-80">
          <Messages />
          <MessageBox placeholder='Type Message Here...' changeFunct={(text:string)=>{console.log(text)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
