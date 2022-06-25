import React, {FC} from 'react';
import Message from './Message';
import {UserMessage, PublicMessage} from '../classes/Messages';
import '../css/Messages.css';

type Props = {
  messages: PublicMessage[];
  username: string
};

const Messages: FC<Props> = ({children, messages, username}) => {
  return (
    <div className="Messages">
      {
        messages.map(message=>{
          return (
            <Message
              self={message.user===username}
              author={message.user}
              text={message.message}
            />
          );
        })
      }
    </div>
  );
}

export default Messages;
