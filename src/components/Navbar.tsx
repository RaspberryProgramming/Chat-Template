import React, {FC, useState} from 'react';
import '../css/Navbar.css';

type Props = {
}

const Message: FC<Props> = ({children}) => {
    const [enabled, setEnabled] = useState(false);
  return (
    <div className="Navbar">
        <div className="toggleButton" onClick={()=>setEnabled(!enabled)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <div className={"options " + (enabled?'enabled':'')}>
            {children}
        </div>
    </div>
  );
}

export default Message;
