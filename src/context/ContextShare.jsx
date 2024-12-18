import React, { createContext, useState } from 'react';

// Create the context
export const addResearchContext = createContext();
export const editContextResearch = createContext();

// Destructure children from props
const ContextShare = ({ children }) => {
  const [addResearchResponse, setAddResearchResponse] = useState("");
  const [editResearchResponse, setEditResearchResponse] = useState("");

  return (
    <addResearchContext.Provider value={{ addResearchResponse, setAddResearchResponse }}>
      <editContextResearch.Provider value={{ editResearchResponse, setEditResearchResponse }}>
        {children}
      </editContextResearch.Provider>
    </addResearchContext.Provider>
  );
};

export default ContextShare;
