import React, {FC} from 'react';
import '../css/UserList.css';

type Props = {
    users: Array<string>
}

const UserList: FC<Props> = ({children, users}) => {
    const list = users.map((user) => {
        //<User name={name}/>
        return <div className='user' key={user}>{user}</div>;
    });

    return (
        <div className="UserList">
            <div className="title">ONLINE</div>
            <div className="list">
                {list}
            </div>
        </div>
    );
}

export default UserList;
