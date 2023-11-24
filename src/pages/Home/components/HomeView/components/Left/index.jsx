import { ReactComponent as StarsIcon } from "../../../../../../assets/icons/stars-icon.svg";
import { ReactComponent as VerifiedIcon } from "../../../../../../assets/icons/verified-icon.svg";

import MainImage from "../../../../../../assets/images/main.png";
import ProfileImage from "../../../../../../assets/images/profile.png";

function Left() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <img src={MainImage} alt="Main" />
      <div className="flex flex-col gap-[18px] p-6 items-start">
        <div className="flex gap-[13px] justify-center">
          <img src={ProfileImage} alt="Profile" />
          <div className="flex flex-col gap-[7.35px]">
            <StarsIcon />
            <div className="flex gap-2.5 items-center">
              <span className="text-sm font-bold">Ken T.</span>
              <VerifiedIcon />
              <span className="text-xs text-[#5BB59A]">Verified Customer</span>
            </div>
          </div>
        </div>
        <span className="text-base text-[#4D5254]">
          “As soon as the Clarifions arrived I put one in my bedroom. This was
          late in the afternoon. When I went to the bedroom in the evening it
          smelled clean. When I went to bed I felt I could breathe better.
          Wonderful.”
        </span>
      </div>
    </div>
  );
}

export { Left };
