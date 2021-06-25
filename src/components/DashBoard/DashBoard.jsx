import "./DashBoard.css";

export default function DashBoard() {
  return (
    <>
      <div className="dashboard__wrap">
        <div className="dashboard__box">
          <div className="dashboard__box-header">
            <h2 className="dashboard__title">To Do</h2>
            <button className="dashboard__settigs-btn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="dashboard__tasks">
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
            <Tasks />
          </div>
        </div>
        <div className="dashboard__box">
          <div className="dashboard__box-header">
            <h2 className="dashboard__title">Doing</h2>
            <button className="dashboard__settigs-btn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <Tasks />
          <Tasks />
        </div>
        <div className="dashboard__box">
          <div className="dashboard__box-header">
            <h2 className="dashboard__title">Done</h2>
            <button className="dashboard__settigs-btn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <Tasks />
        </div>
      </div>
    </>
  );
}

function Tasks() {
  return (
    <>
      <a href="#" className="tasks__box">
        <h2 className="tasks__title">Title</h2>
        <p className="tasks__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          ratione!
        </p>
        <div className="tasks__tags-wrap">
          <p className="tasks__tags"># Tag</p>
        </div>
      </a>
    </>
  );
}
