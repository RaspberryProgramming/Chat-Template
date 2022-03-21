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
            <div className="contents">
                <button className="close" onClick={toggle}>Close</button>
                <h1>Settings</h1>
                <button>Dropdown</button>
            </div>
        </div>
    );
}

export default SettingsModal;
