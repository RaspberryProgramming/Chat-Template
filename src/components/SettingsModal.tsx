import React, {FC, useState} from 'react';
import '../css/SettingsModal.css';

type Props = {
    toggle: () => void;
    enabled: boolean;
    submitUsername: any;
  };

const SettingsModal: FC<Props> = ({children, enabled, toggle, submitUsername}) => {
    const [username, setUsername] = useState("");
    const [usernameSubmit, setUsernameSubmit] = useState(false);

    return (
        <div className={"SettingsModal "+(enabled?'enabled':'')}>
            <div className="contents">
                <button className="close" onClick={toggle}>Close</button>
                <h1>Settings</h1>
                <button>Dropdown</button>
                {usernameSubmit ?
                    (<div>{username}</div>) : (
                    <div>
                        <input onChange={(val)=>{setUsername(val.target.value)}}></input>
                        <button onClick=
                            {()=>{
                                submitUsername(username);
                                setUsernameSubmit(true);
                                }}
                            >Submit Username</button>
                    </div>
                )}



                
            </div>
        </div>
    );
}

export default SettingsModal;
