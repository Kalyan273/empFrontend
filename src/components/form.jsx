import React, { useState, useEffect } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [salary, setSalary] = useState('');
    //   const [password, setPassword] = useState('');

    const submitData = (e) => {
        e.preventDefault();
        var data = {
            name: name,
            city: city,
            salary: salary,
        };
        console.log(data);
        fetch('http://localhost:8080/save', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.text();
        }).then(data => {
            console.log(data);
        })
            ;
    };
    // useEffect(() => {
    //   submitData();
    // }, []);
    return (
        <form>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="city name"
                type="text"
                name="City"
                required
            />
            <input
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                placeholder="Salary"
                type="salary"
                name="salary"
                required
            />
            {/* <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        name="password"
        required
      /> */}
            <button type="submit" onClick={submitData}>
                Submit
            </button>
        </form>
    );
}
export default Form;