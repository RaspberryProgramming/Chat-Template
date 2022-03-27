import React, {FC, useState} from 'react';
import '../css/MessageBox.css';

type Props = {
    placeholder: string,
    changeFunct: Function,
    keyPress: Function
};

let emptyFunct = ()=>{};

const MessageBox: FC<Props> = ({children, placeholder, changeFunct=emptyFunct, keyPress=emptyFunct}) => {
  const [empty, setEmpty] = useState(true);
  const [text, setText] = useState("");
  const [keys, setKeys] : [string[], Function] = useState([]);

  const submit = () => {
    console.info("MessageBox Submitted");

    setEmpty(true);
    setText("");
  };

  const onKeyDown = (event: any) => {
    let tmpkeys = keys;

    if (!keys.includes(event.code)) {
      tmpkeys = [...keys, event.code]
      setKeys(tmpkeys);
    }
  };
  
  const onKeyUp = (event: any) => {
    let tmpkeys = Object.assign({}, keys);

    if (keys.includes(event.code)) {
      tmpkeys = keys.filter((v,i,a)=>v!==event.code);
      setKeys(tmpkeys);
    }

    keyPress(keys, submit);
  };

  const onChange = (event: any) => {

    if (event.target.value.length > 0) {
      setEmpty(false);
    } else {
      setEmpty(true);
    }
    
    setText(event.target.value);

    changeFunct(event.target.value, submit);
    
  };

  return (
    <div className="MessageBox">
      <textarea
        className={empty ? 'empty':''}
        placeholder={placeholder}
        onChange={onChange}
        value={text}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}/>
    </div>
  );
}

export default MessageBox;
