import React, { useState, useEffect } from 'react';
import Form from './Form';
import './App.css';

function App() {

  const memberToEdit = props => {
     console.log(props);
     console.log("test");
  }

  return (
      <div>
        <Form memberToEdit={memberToEdit}/>
      </div>
  );
}

export default App;
