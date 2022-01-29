import { Link } from "react-router-dom";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className="App" className={styles}>
      <header className="App-header">
        <h1>Hi, my name is Alessandro Tambellini</h1>
        <nav>
          <Link to="/aboutMe">aboutMe()</Link>
          <Link to="/contactMe">contaceMe()</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;
