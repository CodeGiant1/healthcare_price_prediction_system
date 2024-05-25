// src/pages/OnboardingPage.js
import React, { useState } from 'react';
import OnboardingStep4 from '../../components/user/onboarding/OnboardingStep4';
import OnboardingCompletion from '../../components/user/onboarding/OnboardingCompletion';
import OnboardingProgress from '../../components/user/onboarding/OnboardingProgress';
import { UserFullName } from '../../components/user/onboarding/UserFullName';
import { UserContact } from '../../components/user/onboarding/UserContact';
import { UserPassword } from '../../components/user/onboarding/UserPassword';

const OnboardingPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const previousStep = () => setStep(step - 1);
  const completeOnboarding = () => setStep(5);

  return (
    <div>
      {/* <OnboardingProgress currentStep={step} /> */}
      {step === 1 && <UserFullName nextStep={nextStep} />}
      {step === 2 && (
        <UserContact nextStep={nextStep} previousStep={previousStep} />
      )}
      {step === 3 && (
        <UserPassword
          completeOnboarding={completeOnboarding}
          previousStep={previousStep}
        />
      )}
      {step === 4 && (
        <OnboardingStep4
          completeOnboarding={completeOnboarding}
          previousStep={previousStep}
        />
      )}
      {step === 5 && <OnboardingCompletion />}
    </div>
  );
};

export default OnboardingPage;
