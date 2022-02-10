import React, {FC} from 'react';
import '../css/SettingsButton.css';

type Props = {
  onClick: () => void
};

const SettingsButton: FC<Props> = ({children, onClick}) => {
  return (
    <div className="SettingsButton" onClick={onClick}>
      Settings
    </div>
  );
}

export default SettingsButton;
