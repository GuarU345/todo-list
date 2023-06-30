const Filters = ({todos,count,filt}) => {

    const handleClickAll = async (event) => {
        event.preventDefault();
        filt(todos);
      };
    
      const handleClickActive = async (event) => {
        event.preventDefault();
        const filteredTodos = todos.filter((todofil) => !todofil.completed);
        filt(filteredTodos);
      };
    
      const handleClickCompleted = async (event) => {
        event.preventDefault();
        const filteredTodos = todos.filter((todofil) => todofil.completed);
        filt(filteredTodos);
      };
    

  return (
    <div>
        <footer
          style={{
            display: "flex",
            padding: "0.5rem",
            justifyContent: "space-between",
          }}
        >
          <span>
            {count} {count === 1 ? "work" : "works"} pending
          </span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={handleClickAll} className="filters">
              All
            </button>
            <button onClick={handleClickActive} className="filters">
              Active
            </button>
            <button onClick={handleClickCompleted} className="filters">
              Completed
            </button>
          </div>
        </footer>
    </div>
  )
}

export default Filters