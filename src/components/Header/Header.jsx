import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <nav className="navbar">
            <div className="logo__wrap">
              <Link to="/" className="logo">
                To-Do
              </Link>
              <p className="logo__desc">• Web App by Ranee</p>
            </div>
            
            <Link to="/add" className="btn__add-task" title="Add Task">
              <i className="fas fa-plus"></i>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}

