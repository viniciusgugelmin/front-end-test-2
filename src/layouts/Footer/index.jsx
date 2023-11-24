import { ReactComponent as LockIcon } from "../../assets/icons/lock-icon.svg";

import { MainContentWrapper } from "../../components";

function Footer() {
  return (
    <footer className="bg-[#252F3D] py-6 text-base">
      <MainContentWrapper className="text-white flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="border-r pr-4 border-[#CFCFCF] border-solid capitalize">
            Copyright (c) 2023
          </span>
          <span className="lowercase">Clarifionsupport@clarifion.com</span>
        </div>
        <span className="flex gap-2.5 items-center capitalize">
          <LockIcon className="[&>*]:stroke-white" />
          <span>Secure 256-bit SSL encryption</span>
        </span>
      </MainContentWrapper>
    </footer>
  );
}

export { Footer };
