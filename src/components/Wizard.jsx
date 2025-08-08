import React, { useState } from 'react';
import CoreStep from '@/components/steps/CoreStep';
import EOSStep from '@/components/steps/EOSStep';
import DigitalStep from '@/components/steps/DigitalStep';
import TechnicalStep from '@/components/steps/TechnicalStep';
import ServicesStep from '@/components/steps/ServicesStep';
import LandingPageStep from '@/components/steps/LandingPageStep';
import ReviewStep from '@/components/steps/ReviewStep';
import SuccessPage from '@/components/steps/SuccessPage';

import Stepper from '@/components/Stepper';
import ProgressBar from '@/components/ProgressBar';
import ThemeToggle from '@/components/ThemeToggle';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProjectManagementStep from './steps/ProjectManagementStep';

const steps = [
  'Core',
  'EOS',
  'Digital',
  'Technical',
  'Services',
  'Project Management',
  'Review',
  'Success',
];

const Wizard = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    core: {},
    eos: {},
    digital: {},
    technical: {},
    services: {
      landingPage: false,
      soberLiving: false,
      adwords: false,
    },
    project: {},
  });

  const updateFormData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const next = () => {
    setStep((prevStep) => {
      let nextStep = prevStep + 1;

      // Skip Landing Page if not selected
      if (nextStep === 5 && !formData?.services?.landingPage) {
        nextStep++;
      }

      return Math.min(nextStep, steps.length - 1);
    });
  };

  const back = () => {
    setStep((prevStep) => {
      let prev = prevStep - 1;

      if (prevStep === 6 && !formData?.services?.landingPage) {
        prev--; // skip over landing page
      }

      return Math.max(prev, 0);
    });
  };

  const reset = () => {
    setStep(0);
    setFormData({
      core: {},
      eos: {},
      digital: {},
      technical: {},
      services: {
        landingPage: false,
        soberLiving: false,
        adwords: false,
      },
      project: {},
    });
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <CoreStep
            data={formData.core}
            update={(data) =>
              updateFormData({ core: { ...formData.core, ...data } })
            }
            next={next}
          />
        );
      case 1:
        return (
          <EOSStep
            data={formData.eos}
            update={(data) =>
              updateFormData({ eos: { ...formData.eos, ...data } })
            }
            next={next}
            back={back}
          />
        );
      case 2:
        return (
          <DigitalStep
            data={formData.digital}
            update={(data) =>
              updateFormData({ digital: { ...formData.digital, ...data } })
            }
            next={next}
            back={back}
          />
        );
      case 3:
        return (
          <TechnicalStep
            data={formData.technical}
            update={(data) =>
              updateFormData({ technical: { ...formData.technical, ...data } })
            }
            next={next}
            back={back}
          />
        );
      case 4:
        return (
          <ServicesStep
            data={formData.services}
            update={(data) =>
              updateFormData({ services: { ...formData.services, ...data } })
            }
            next={next}
            back={back}
            renderExtras={() => (
              <div className="mt-6 flex gap-4">
                {formData.services?.soberLiving && (
                  <button
                    className="btn"
                    onClick={() => router.push('/onboarding/sober-living')}
                  >
                    Proceed to Sober Living Form
                  </button>
                )}
                {formData.services?.adwords && (
                  <button
                    className="btn"
                    onClick={() => router.push('/onboarding/adwords')}
                  >
                    Proceed to AdWords Setup
                  </button>
                )}
              </div>
            )}
          />
        );
      case 5:
        return (
          <ProjectManagementStep
            data={formData.services}
            update={(data) =>
              updateFormData({ services: { ...formData.services, ...data } })
            }
            next={next}
            back={back}
            renderExtras={() => (
              <div className="mt-6 flex gap-4">
                {formData.services?.soberLiving && (
                  <button
                    className="btn"
                    onClick={() => router.push('/onboarding/sober-living')}
                  >
                    Proceed to Sober Living Form
                  </button>
                )}
                {formData.services?.adwords && (
                  <button
                    className="btn"
                    onClick={() => router.push('/onboarding/adwords')}
                  >
                    Proceed to AdWords Setup
                  </button>
                )}
              </div>
            )}
          />
        );
      case 6:
        return (
          <ReviewStep
            data={formData}
            back={back}
            next={next}
          />
        );
      case 7:
        return <SuccessPage reset={reset} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* <ThemeToggle /> */}
      <div className="w-full max-w-5xl mx-auto px-4">
        <ProgressBar currentStep={step} totalSteps={steps.length} />
        <Stepper currentStep={step} steps={steps} goToStep={setStep} allowFuture={false} />
        <motion.div
          className="bg-[#262626] dark:bg-black bg-opacity-10 backdrop-blur-md shadow-2xl p-6 rounded-xl mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderStep()}
        </motion.div>
      </div>
    </div>
  );
};

export default Wizard;
