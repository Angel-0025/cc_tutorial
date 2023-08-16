import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const showEmployee = true;
  const [role, setRole] = useState('');
  return (
    <div className="App bg-red-300">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <Employee name="Angel" role="intern" />
          <Employee name="Jose" role={role} />
        </>
      ) : (
        <p>You cannot see the Employee</p>
      )}
    </div>
  );
}

export default App;
