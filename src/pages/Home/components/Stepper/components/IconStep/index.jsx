import { ReactComponent as CheckIcon } from "../../../../../../assets/icons/check-icon.svg";

function IconStep({ step, achieved, currentStep }) {
  const iconContent = achieved ? <CheckIcon /> : <span>{step}</span>;

  const defaultIconClassName =
    "flex items-center justify-center w-10 h-10 rounded-full";
  const achievedIconClassName = "bg-[#85BF55] text-white";
  const currentStepIconClassName = "bg-[#2C7EF8] text-white";
  const notAchievedIconClassName =
    "bg-white text-[#2C7EF8] border-[#2C7EF8] border-solid border-2";

  let className = defaultIconClassName;

  if (achieved) {
    className += ` ${achievedIconClassName}`;
  }

  if (currentStep === step) {
    className += ` ${currentStepIconClassName}`;
  }

  if (step > currentStep) {
    className += ` ${notAchievedIconClassName}`;
  }

  return <span className={className}>{iconContent}</span>;
}

export { IconStep };
