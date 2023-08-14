import "./index.css";
import Employee from "./components/Employee";

function App() {
  const showEmployee = false;
  return (
    <div className="App bg-red-300">
      {showEmployee ? (
        <>
          <Employee />
        </>
      ) : (
        <p>You cannot see the Employee</p>
      )}
    </div>
  );
}

export default App;
