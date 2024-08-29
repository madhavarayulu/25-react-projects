import React from 'react';
import './feature-flag.css';
import { useFeatureFlag } from './feature-flag-context/FeatureFlagContext';

function NewFeature() {
  return (
    <div className="feature-component feature-component-new">
      New Feature is enabled!
    </div>
  );
}

function AnotherFeature() {
  return <div className="feature-component">Another Feature is enabled!</div>;
}

function FeatureFlag() {
  const { flags, toggleFlag } = useFeatureFlag();

  return (
    <div className="container-feature-flag">
      <div>
        <button
          className="btn-new-feature"
          onClick={() => toggleFlag('newFeature')}
        >
          Toggle New Feature
        </button>
        {flags.newFeature && <NewFeature />}
      </div>
      <div>
        <button onClick={() => toggleFlag('anotherFeature')}>
          Toggle Another Feature
        </button>
        {flags.anotherFeature && <AnotherFeature />}
      </div>
    </div>
  );
}

export default FeatureFlag;
