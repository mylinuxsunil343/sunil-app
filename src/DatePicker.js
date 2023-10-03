import React, { useState } from 'react';

const DatePicker = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const today = new Date();
  const maxDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const handleDateChange = (event) => {
    setBirthDate(event.target.value);
    calculateAge(event.target.value);
  };

  const calculateAge = (dob) => {
    if (!dob) {
      setAge(null);
      return;
    }

    const birthDate = new Date(dob);
    const yearDifference = today.getFullYear() - birthDate.getFullYear();
    setAge(yearDifference);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <p style={{ marginRight: '10px' }}>Date of Birth:</p>
        <input 
          type="date" 
          value={birthDate} 
          onChange={handleDateChange} 
          max={maxDate} // Restricts the user from selecting future dates
        />
      </div>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default DatePicker;