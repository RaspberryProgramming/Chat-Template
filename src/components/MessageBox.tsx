import React, {FC} from 'react';
import '../css/MessageBox.css';

type Props = {
    placeholder: string,
};

const MessageBox: FC<Props> = ({children, placeholder}) => {
  return (
    <div className="MessageBox">
      <input type='text' placeholder={placeholder}/>
    </div>
  );
}

export default MessageBox;
