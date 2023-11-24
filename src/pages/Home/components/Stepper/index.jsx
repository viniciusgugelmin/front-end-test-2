import { IconStep } from "./components";

function Stepper({ steps, currentStep }) {
  return (
    <ul className="flex justify-between mb-10">
      {steps.map(({ title: titleText, achieved }, index) => {
        const step = index + 1;
        const title = `Step ${step} : ${titleText}`;

        let titleClassName = "text-xl";

        if (currentStep === step) {
          titleClassName += " font-bold";
        }

        return (
          <li key={index} className="flex gap-5 items-center">
            <IconStep
              step={step}
              achieved={achieved}
              currentStep={currentStep}
            />
            <span className={titleClassName}>{title}</span>
          </li>
        );
      })}
    </ul>
  );
}

export { Stepper };
