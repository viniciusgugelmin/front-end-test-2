import { ReactComponent as McAfeeIcon } from "../../../../assets/icons/mc-afee-icon.svg";
import { ReactComponent as NortonIcon } from "../../../../assets/icons/norton-icon.svg";

import LogoImage from "../../../../assets/images/logo.png";

import { MainContentWrapper } from "../../../../components";

function SubHeader() {
  return (
    <MainContentWrapper className="flex justify-between items-center pt-[30px] pb-[19px] bg-white">
      <img src={LogoImage} alt="logo" />
      <div className="flex items-center gap-8">
        <McAfeeIcon />
        <NortonIcon />
      </div>
    </MainContentWrapper>
  );
}

export { SubHeader };
