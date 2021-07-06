import "./DashBoard.css";
import TodoList from "./../TodoList/TodoList";

export default function DashBoard() {
  return (
    <>
      <div className="dashboard__wrap">
        <div className="dashboard__box">
          <div className="dashboard__box-header todo">
            <h2 className="dashboard__title"><i className="fas fa-clipboard-list"></i>To Do</h2>
            <button className="dashboard__settigs-btn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="dashboard__todos">
            <TodoList status={1}></TodoList>
          </div>
        </div>
        <div className="dashboard__box">
          <div className="dashboard__box-header inprocess">
            <h2 className="dashboard__title"><i className="fas fa-hourglass-half"></i>In Process</h2>
            <button className="dashboard__settigs-btn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="dashboard__todos">
            <TodoList status={2}></TodoList>
          </div>
        </div>
        <div className="dashboard__box">
          <div className="dashboard__box-header done">
            <h2 className="dashboard__title"><i className="fas fa-check"></i>Done</h2>
            <button className="dashboard__settigs-btn">
              <i className="fas fa-ellipsis-h"></i>
            </button>
          </div>
          <div className="dashboard__todos">
            <TodoList status={3}></TodoList>
          </div>
        </div>
      </div>
    </>
  );
}
