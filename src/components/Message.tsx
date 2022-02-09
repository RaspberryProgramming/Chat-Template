import React, {FC} from 'react';
import '../css/Message.css';

type Props = {
    text: string,
    author: string,
    self: boolean
}

const Message: FC<Props> = ({children, text, author, self}) => {
  return (
    <div className={"Message"+(self?" self":"")}>
      <div className="author">{author}</div>
      <div className="text">{text}</div>
    </div>
  );
}

export default Message;
