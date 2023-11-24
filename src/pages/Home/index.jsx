import { MainContentWrapper } from "../../components";

import { HomeTitle, HomeView, Stepper } from "./components";

function HomePage() {
  const currentStep = 3;
  const steps = [
    {
      title: "Cart Review",
      achieved: true,
    },
    {
      title: "Checkout",
      achieved: true,
    },
    {
      title: "Special Offer",
      achieved: false,
    },
    {
      title: "Confirmation",
      achieved: false,
    },
  ];

  return (
    <MainContentWrapper WrapperEl="section">
      <HomeTitle />
      <Stepper steps={steps} currentStep={currentStep} />
      <HomeView />
    </MainContentWrapper>
  );
}

export { HomePage };
