import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";

function App() {
  const showEmployee = true;
  const [role, setRole] = useState("");

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Angel",
      role: "Intern",
      img: "https://images.pexels.com/photos/1435517/pexels-photo-1435517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Jose",
      role: "Senior Developer",
      img: "https://images.pexels.com/photos/2880094/pexels-photo-2880094.jpeg",
    },
    {
      id: 3,
      name: "John",
      role: "Mid-Level Developer",
      img: "https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Josh",
      role: "Analyst",
      img: "https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Kate",
      role: "Designer",
      img: "https://images.pexels.com/photos/3460478/pexels-photo-3460478.jpeg",
    },
    {
      id: 6,
      name: "Bob",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/2108843/pexels-photo-2108843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        // return new employee info
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="App bg-gray-300 min-h-screen">
      <Header />
      {showEmployee ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              // Different way to pass the data // props
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );

              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the Employee</p>
      )}
    </div>
  );
}

export default App;
