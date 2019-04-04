import React from 'react';

const GenerateEmployee = ({ selectEmployee }) => {
  return (
    <div className="GenerateEmployee">
      <button onClick={selectEmployee}>Générer citation</button>
    </div>
  );
};

export default GenerateEmployee;