import React, {FC} from 'react';
import '../css/NavToggle.css';

type Props = {
    toggle: Function,
    title: String,
}

const Message: FC<Props> = ({children, toggle, title}) => {
  return (
    <div className="NavToggle item" onClick={()=>{toggle()}}>
      {title}
    </div>
  );
}

export default Message;
