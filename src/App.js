import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState({name: "", email: "", role: " "});

  const changeHandler = event => {
    setValue({...value, [event.target.name]: event.target.value});
  }

  const handleSubmission = event => {
    event.preventDefault();
    console.log(value.name);
    console.log(value.email);
    console.log(value.role);
  }

  return (
    <div className="App">
      {console.log(value)};
          <form onSubmit={event => handleSubmission(event)}>
              <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={event => changeHandler(event)}
                />
              </label>
              <label>
                <input
                    type="text"
                    name="email"
                    value={value.email}
                    onChange={event => changeHandler(event)}
                />
              </label>
              <label>
                <input
                   type="text"
                   name="role"
                   value={value.role}
                   onChange={event => changeHandler(event)}
                />
              </label>
         </form>
    </div>
  );
}

export default App;
