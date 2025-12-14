import React from 'react';
import '../App.css';

const Fire = () => {
  return (
    <div className="fire-wrapper">
      {/* Burning wood */}
      <div className="logs">
        <span className="log log-1" />
        <span className="log log-2" />
      </div>

      {/* Fire */}
      <div className="fire">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>
    </div>
  );
};

export default Fire;
