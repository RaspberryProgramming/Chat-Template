import './css/App.css';
import Messages from './components/Messages';

function App() {
  return (
    <div className="App">
      <div className="col W-20">
        <div>Users:</div>
        <div>user</div>
        <div>Bob</div>
      </div>
      <div className="col W-80">
        <Messages />
        <input/>
      </div>
    </div>
  );
}

export default App;
