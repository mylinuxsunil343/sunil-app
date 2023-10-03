import React from 'react';

const Banner = (props) => {
  const bannerStyle = {
    backgroundColor: 'Orange', 
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  return (
    <div style={bannerStyle}>
      {props.message || 'Default Banner Message'}  {/* Fallback message if none is provided */}
    </div>
  );
}

export default Banner;