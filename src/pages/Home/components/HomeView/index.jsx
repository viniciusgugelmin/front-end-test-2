import { MainContentWrapper } from "../../../../components";

import { Left, Right } from "./components";

function HomeView() {
  return (
    <MainContentWrapper
      WrapperEl="main"
      className="flex gap-10 p-10 bg-[#FAFAFA] rounded-[10px]"
    >
      <Left />
      <Right />
    </MainContentWrapper>
  );
}

export { HomeView };
