import React, { useState } from 'react';

const Salary = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    // Regular expression to check if input value is numeric
    const numericRegex = /^[0-9]*$/;

    // Test if input value is empty or numeric, if true, update the state
    if (inputValue === '' || numericRegex.test(inputValue)) {
      setValue(inputValue);
    }
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <p>Enter Your Salary (Per year):</p>
      <input 
        type="text" 
        value={value} 
        onChange={handleInputChange} 
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default Salary;