import "./App.css";
import Header from "./components/Header/Header";
import DashBoard from "./components/DashBoard/DashBoard";
import { Switch, Route } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DashBoard></DashBoard>
          </Route>
          <Route exact path="/add">
            <AddForm></AddForm>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
