import "./App.css";
import Header from "./components/Header/Header";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <DashBoard></DashBoard>
      </div>
    </>
  );
}

export default App;
