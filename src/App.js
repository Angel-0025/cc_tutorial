import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("");
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Jose"
              role={role}
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Employee
              name="Angel"
              role="intern"
              img="https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </>
      ) : (
        <p>You cannot see the Employee</p>
      )}
    </div>
  );
}

export default App;
