import React, {FC, useState} from 'react';
import '../css/MessageBox.css';

type Props = {
    placeholder: string,
};

const MessageBox: FC<Props> = ({children, placeholder}) => {
  const [empty, setEmpty] = useState(true);

  const onChange = (event: any) => {
    console.log(event.target.value.length > 0);
    if (event.target.value.length > 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
    
  };

  return (
    <div className="MessageBox">
      <textarea className={empty ? 'empty':''} placeholder={placeholder} onChange={onChange}/>
    </div>
  );
}

export default MessageBox;
