import './App.css';
import {useState } from "react"
import FormIn from "./components/form";

function App() {
  const [values, setValues] =useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword : "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username should be 3-16 charsacters",
      label : "Username",
      pattern: "[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label : "Email",
      required:true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label : "Birthday",
    },
    {
      id: 4,
      name: "number",
      type: "number",
      placeholder: "Phone number",
      errorMessage:
        "Password should be 7 -14 digits long",
      label: "Phone number",
      pattern: "^\+?[1-9][0-9]{7,14}$",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name ]: e.target.value});
  };

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1> Register</h1>
        {inputs.map((input) => (
          <FormIn
            key= {input.id}
            {...input}
            value = {values[input.name]}
            onChange = {onChange}
          />
        ))}
        <button >Submit</button>
      </form>
    </div>
  );

};

export default App;
