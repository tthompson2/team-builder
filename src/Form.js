import React, { useState } from 'react';

const Form = (props) => {

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
      
        const addNewTeammate = person => {
      
          const newTeammate = {
      
            name: person.name,
            email: person.email,
            role: person.role
          };
      
          setValue([...value, newTeammate]);
        }
      
        return (
          <div className="App">
            {console.log(value)}
            <br/>
                <form onSubmit={event => handleSubmission(event)}>
                    <label htmlFor="filter">
                      Name:
                      <input
                          type="text"
                          id="filter"
                          onChange={event => changeHandler(event)}
                      />
                      <button onClick={props.memberToEdit}>Button1</button>
                      <br/>
                    </label>
                    <label>
                      Email:
                      <input
                          type="text"
                          name="email"
                          onChange={event => changeHandler(event)}
                      />
                      <button onClick={props.memberToEdit}>Button2</button>
                      <br/>
                    </label>
                    <label>
                      Role: 
                      <input
                         type="text"
                         name="role"
                         value={value.role}
                         onChange={event => changeHandler(event)}
                      />
                      <button onClick={props.memberToEdit}>Button3</button>
                    </label>
               </form>
          </div>
        );
}

export default Form;