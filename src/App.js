
import './App.css';


function App() {

  const showMessage = () => {
    alert("Hello from React!");
  };

  return (
    <div className="box">
      <h1>Welcome to My React App 🎉</h1>
      <button className="btn" onClick={showMessage}>Click Me</button>
    </div>
  );
}

export default App;
