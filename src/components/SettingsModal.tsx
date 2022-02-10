import React, {FC} from 'react';
import '../css/SettingsModal.css';

type Props = {
    toggle: () => void;
    enabled: boolean
  };

const SettingsModal: FC<Props> = ({children, enabled, toggle}) => {
    console.log(enabled);
    return (
        <div className={"SettingsModal "+(enabled?'enabled':'')}>
            <button className="close" onClick={toggle}>Close</button>
            <p>Settings</p>
            <button>Dropdown</button>
        </div>
    );
}

export default SettingsModal;
