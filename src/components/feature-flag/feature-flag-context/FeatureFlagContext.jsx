import { createContext, useContext, useState } from 'react';

const FeatureFlagContext = createContext();

export function FeatureFlagProvider({ children }) {
  const [flags, setFlags] = useState({
    newFeature: false,
    anotherFeature: true,
  });

  function toggleFlag(flag) {
    setFlags((prevFlags) => ({
      ...prevFlags,
      [flag]: !prevFlags[flag],
    }));
  }

  return (
    <FeatureFlagContext.Provider value={{ flags, toggleFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlag() {
  return useContext(FeatureFlagContext);
}
