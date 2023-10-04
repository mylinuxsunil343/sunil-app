import React, { useState } from 'react';

const GenderRadioButton = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <label>Gender:</label>
      <div style={{ display: 'inline-flex', marginLeft: '10px' }}>
        <label>
          <input
            type="radio"
            value="Male"
            checked={gender === 'Male'}
            onChange={handleGenderChange}
          />
          A. Male
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="Female"
            checked={gender === 'Female'}
            onChange={handleGenderChange}
          />
          B. Female
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="Non-binary"
            checked={gender === 'Non-binary'}
            onChange={handleGenderChange}
          />
          C. Non-binary
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="Prefer not to say"
            checked={gender === 'Prefer not to say'}
            onChange={handleGenderChange}
          />
          D. Prefer not to say
        </label>
      </div>
    </div>
  );
};

export default GenderRadioButton;