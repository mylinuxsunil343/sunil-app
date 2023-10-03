import React, { useState } from 'react';

const GenderRadioButton = () => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <p>Please select your gender:</p>
      <div>
        <input
          type="radio"
          id="male"
          name="gender"
          value="Male"
          onChange={handleGenderChange}
          checked={gender === 'Male'}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div>
        <input
          type="radio"
          id="female"
          name="gender"
          value="Female"
          onChange={handleGenderChange}
          checked={gender === 'Female'}
        />
        <label htmlFor="female">Female</label>
      </div>
      <div>
        <input
          type="radio"
          id="others"
          name="gender"
          value="Others"
          onChange={handleGenderChange}
          checked={gender === 'Others'}
        />
        <label htmlFor="others">Others</label>
      </div>
      {gender && <p>Your selected gender is: {gender}</p>}
    </div>
  );
}

export default GenderRadioButton;