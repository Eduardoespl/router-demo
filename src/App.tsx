import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile");
  }

  return (
    <div>
      <h1>Main Page</h1>
      <p>Navigation</p>
      <nav>
        <ul>
          <li>
            <button onClick={handleClick}> Profile Page</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;