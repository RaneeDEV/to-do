import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__container">
          <nav className="navbar">
            <div className="logo__wrap">
              <a href="/" className="logo">
                To-Do
              </a>
              <p className="logo__desc">• Web App by Ranee</p>
            </div>
            <button className="btn__add-task">
              <i className="fas fa-plus"></i>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
{
}
