import React from "react";

const Employee = (props) => {
  return (
    <>
      <h3 class="mb-2 text-2xl font-bold leading-none tracking-tight text-gray-900">
        Employee name: {props.name}
      </h3>
      <p>Employee Role: {props.role ? props.role : "No Role"}</p>
    </>
  );
};

export default Employee;
