import React, {FC} from 'react';
import Message from './Message';
import '../css/Messages.css';

const Messages: FC = ({children}) => {
  return (
    <div className="Messages">
      <Message text="Hello World" author="Bob" self={false}/>
      <Message text="I found the code bob" author="Cheeseits" self={false}/>
      <Message text="Howdy" author="Me" self={true}/>
      <Message text="I found the secret sauce. Do you know what it's made of?" author="Me" self={true}/>
    </div>
  );
}

export default Messages;
