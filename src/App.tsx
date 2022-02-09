import './css/App.css';
import Messages from './components/Messages';
import UserList from './components/UserList';

function App() {
  let users = ["Bob", "Sean","Bob", "Sean","Bob", "Sean","Bob", "Sean","Bob", "Sean", "Cheeseits"];

  return (
    <div className="App">
      <div className="col W-20">
        <UserList users={users}/>
      </div>
      <div className="col W-80">
        <Messages />
        <input/>
      </div>
    </div>
  );
}

export default App;
