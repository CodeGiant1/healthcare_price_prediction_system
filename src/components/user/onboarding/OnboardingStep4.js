import React from 'react';

const OnboardingStep4 = ({ completeOnboarding, previousStep }) => (
  <div>
    <h2>Step 4: Review and Complete</h2>
    {/* Summary of entered information */}
    <button onClick={previousStep}>Back</button>
    <button onClick={completeOnboarding}>Complete</button>
  </div>
);

export default OnboardingStep4;
