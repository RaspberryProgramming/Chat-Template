import React, {FC, useState} from 'react';
import '../css/Modal.css';

type Props = {
    submitUsername: any;
}

const LoginModal: FC<Props> = ({children, submitUsername}) => {

    const [username, setUsername] = useState("");

    return (
        <div className="Modal">
            <div className="background"></div>
            <div className="content">
                <p>Please Submit a username</p>
                
                <span>
                    <input type="text" onKeyUp={(v)=>{
                        if(v.key !== "Enter") {
                            setUsername(v.currentTarget.value)
                        } else {
                            submitUsername(username);
                        }
                        }}/>
                    <button onClick={()=>{submitUsername(username)}}>Submit</button>
                </span>
            </div>
        </div>
    );
}

export default LoginModal;
