import React, { createContext, useState } from 'react';

export const EligibilityContext = createContext();

export const EligibilityProvider = ({ children }) => {
  const [eligibilityResult, setEligibilityResult] = useState(null);
  
  return (
    <EligibilityContext.Provider value={{ eligibilityResult, setEligibilityResult }}>
      {children}
    </EligibilityContext.Provider>
  );
}; 