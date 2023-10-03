import React, { useState } from 'react';

const LifestyleChoices = () => {
  const [smoking, setSmoking] = useState('');
  const [drinking, setDrinking] = useState('');

  const handleSmokingChange = (event) => {
    setSmoking(event.target.value);
  };

  const handleDrinkingChange = (event) => {
    setDrinking(event.target.value);
  };

  return (
    <div style={{ margin: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <p>Do you smoke?</p>
        <input type="radio" id="smokingYes" name="smoking" value="Yes" onChange={handleSmokingChange} />
        <label htmlFor="smokingYes">Yes</label>
        <input type="radio" id="smokingNo" name="smoking" value="No" onChange={handleSmokingChange} />
        <label htmlFor="smokingNo">No</label>
      </div>

      <div>
        <p>Do you drink?</p>
        <input type="radio" id="drinkingYes" name="drinking" value="Yes" onChange={handleDrinkingChange} />
        <label htmlFor="drinkingYes">Yes</label>
        <input type="radio" id="drinkingNo" name="drinking" value="No" onChange={handleDrinkingChange} />
        <label htmlFor="drinkingNo">No</label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p>Your Choices:</p>
        <p>Smoking: {smoking}</p>
        <p>Drinking: {drinking}</p>
      </div>
    </div>
  );
}

export default LifestyleChoices;