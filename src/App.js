import "./App.css";
import Aside from "./components/Aside";
import Navbar from "./components/Navbar";
import ForeignExchange from "./pages/ForeignExchange";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ForeignExchange />
      <Aside />
    </div>
  );
}

export default App;
