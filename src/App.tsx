import './css/App.css';
import Messages from './components/Messages';
import UserList from './components/UserList';
import SettingsButton from './components/SettingsButton';
import SettingsModal from './components/SettingsModal';
import MessageBox from './components/MessageBox';
import Navbar from './components/Navbar';
import NavToggle from './components/NavToggle';
import React, { useState, useEffect } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
import { DefaultEventsMap } from "@socket.io/component-emitter";
import {UserMessage, PublicMessage} from './classes/Messages';

const ENDPOINT = "http://localhost:40412";

function App() {
  const [settingsEnabled, setSettingsEnabled] = useState(false);
  const [username, setUsername] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [userMessages, setUserMessages] = useState<UserMessage[]>([]);
  const [publicMessages, setPublicMessages] = useState<PublicMessage[]>([]);
  const [conversation, setConversation] = useState<string>('');
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  useEffect(() => {
    let newSocket = socketIOClient(ENDPOINT, {transports : ['websocket']});

    newSocket.on('login-success', (args: any)=>{
      
      console.log("Login Successful");
  
      setOnlineUsers(args.online);
    });
  
    newSocket.on('new-login', (args: any) => {
  
      console.log(`New Login ${args.user}`)
  
      setOnlineUsers(onlineUsers=>[...onlineUsers, args.user]);
  
    });
  
    newSocket.on('publicMessage', (args: any)=>{
  
      console.log(`Received public message from ${args.user}`);
      setPublicMessages((publicMessages) => {

        let message = new PublicMessage(args.message, args.user, args.timestamp);
              
        return  [...publicMessages, message];
      });
    });

    setSocket(newSocket);

    return () => {newSocket.close()};
  }, [setSocket]);

  /*socket.on('login-success', (args)=>{
      
    console.log("Login Successful");

    setOnlineUsers(args.online);
  });

  socket.on('new-login', (args)=>{

    console.log(`New Login ${args.user}`)

    setOnlineUsers([...onlineUsers, args.user]);

  });

  socket.on('publicMessage', (args)=>{

    console.log(`Received public message from ${args.user}`);
    
    let message = new PublicMessage(args.message, args.user, args.timestamp);
          
    setPublicMessages([...publicMessages, message]);
  });*/

  return (
    <div className="App">
      <Navbar>
        <NavToggle toggle={()=>{setSettingsEnabled(!settingsEnabled)}} title="Settings"/>
      </Navbar>
      <div className="columns">
        <div className="col W-20">
          <UserList users={onlineUsers}/>
          <SettingsButton onClick={()=>{setSettingsEnabled(!settingsEnabled)}}/>
          <SettingsModal
            enabled={settingsEnabled}
            toggle={()=>{setSettingsEnabled(!settingsEnabled)}}
            submitUsername={(val:any)=>{if (socket) {console.log(val); socket.emit('login', {"user":val}); setUsername(val);}}}
            />
        </div>
        <div className="col W-80">
          <Messages messages={publicMessages} username={username}/>
          <MessageBox placeholder='Type Message Here...'
            keyPress={(keys:string[], submit: Function)=>{
              if (keys.includes("Enter") && !(keys.includes("ShiftRight") || keys.includes("ShiftLeft"))) {
                submit();
              }
            }}
            changeFunct={(text:string)=>{console.log(text);}}
            externalSubmit={(text:string)=>{

              if(socket) {
                console.log(`Sent ${conversation===''?'publicMessage':'userMessage'} Message ${text}`);

                socket.emit(conversation===''?'publicMessage':'userMessage', 
                  {
                    'user': username,
                    'message': text,
                  }
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
