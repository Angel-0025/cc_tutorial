import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("");
  const [employees, setEmployees] = useState([
    {
      name: "Angel",
      role: "Intern",
      img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Jose",
      role: "Senior Developer",
      img: "https://images.pexels.com/photos/2880094/pexels-photo-2880094.jpeg",
    },
    {
      name: "John",
      role: "Mid-Level Developer",
      img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Josh",
      role: "Analyst",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Kate",
      role: "Designer",
      img: "https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg",
    },
    {
      name: "Bob",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/2108843/pexels-photo-2108843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

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
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the Employee</p>
      )}
    </div>
  );
}

export default App;
