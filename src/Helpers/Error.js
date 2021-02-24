import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  console.log('entrando no error');
  console.log(error);

  return <p style={{ color: '#f31', margin: '1rem 0' }}>{error}</p>;
};

export default Error;
