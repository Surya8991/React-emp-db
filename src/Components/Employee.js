import React, { useState } from 'react';

const Employee = () => {
    const [employees, setEmployees] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [empId, setEmpId] = useState('');
    const [email, setEmail] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleEmpId = (e) => {
        setEmpId(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAddEmployee = () => {
        setEmployees([...employees, { firstName, empId, email }]);
        setFirstName('');
        setEmpId('');
        setEmail('');
    };

    const handleDeleteEmployee = (index) => {
        setEmployees(employees.filter((employee, i) => i !== index));
    };
    const handleEditEmployee = (index, newName,newEmail,newEmpId) => {
        const newEmployees = [...employees];
        newEmployees[index] = {
            ...newEmployees[index],
            firstName: newName,
            email:newEmail,
            empId:newEmpId
        };
        setEmployees(newEmployees);
    };
    const handleResetEmployee = () => {
        setEmployees([])
    }

    return (
        <div className="container">
            <h1 className="my-4">Employee Database</h1>
            <form className="mb-4">
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={firstName}
                            onChange={handleFirstNameChange}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Emp Id"
                            value={empId}
                            onChange={handleEmpId}
                        />
                    </div>
                    <div className="col">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddEmployee}
                            disabled={!firstName.length > 0 & !empId.length > 0 & !email.length > 0}
                        >
                            Add Employee
                        </button>
                        <button
                            type="button my-3"
                            className="btn btn-dark"
                            onClick={handleResetEmployee}
                        >
                            Reset Employee
                        </button>
                    </div>
                </div>
            </form>
            {employees.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Employee Id</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.firstName}</td>
                                <td>{employee.empId}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDeleteEmployee(index)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={() => handleEditEmployee(index, prompt("Enter Name"),prompt("Enter New Email Id"),prompt("Enter New Employee Id"))}
                                    >
                                           Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            ) : (
                <p>No employees found.</p>
            )}
        </div>
    );
};

export default Employee;
