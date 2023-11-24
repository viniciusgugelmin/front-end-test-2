import { ReactComponent as StarIcon } from "../../../../../../assets/icons/star-icon.svg";
import { ReactComponent as CheckGroupIcon } from "../../../../../../assets/icons/check-group-icon.svg";
import { ReactComponent as CheckIcon } from "../../../../../../assets/icons/check-icon.svg";
import { ReactComponent as DiscountIcon } from "../../../../../../assets/icons/discount-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../../../../../assets/icons/arrow-right-icon.svg";
import { ReactComponent as LockIcon } from "../../../../../../assets/icons/lock-icon.svg";
import { ReactComponent as VisaIcon } from "../../../../../../assets/icons/visa-icon.svg";
import { ReactComponent as ShopPayIcon } from "../../../../../../assets/icons/shop-pay-icon.svg";
import { ReactComponent as PaypalIcon } from "../../../../../../assets/icons/paypal-icon.svg";
import { ReactComponent as MasterCardIcon } from "../../../../../../assets/icons/mastercard-icon.svg";
import { ReactComponent as GPayIcon } from "../../../../../../assets/icons/gpay-icon.svg";
import { ReactComponent as ApplePayIcon } from "../../../../../../assets/icons/apple-pay-icon.svg";
import { ReactComponent as AmexIcon } from "../../../../../../assets/icons/amex-icon.svg";

import MainMinimizedImage from "../../../../../../assets/images/main-minimized.png";
import CertificateImage from "../../../../../../assets/images/certificate.png";

function Right() {
  return (
    <div className="flex flex-1 flex-col gap-8 max-w-[550px]">
      <h1 className="leading-[44px] text-[32px] capitalize">
        <strong className="font-normal text-[#2C7EF8] uppercase">
          ONE TIME ONLY
        </strong>{" "}
        special price for 6 extra Clarifion for only{" "}
        <strong className="font-normal text-[#2C7EF8]">$14 each</strong> ($84.00
        total!)
      </h1>
      <div className="flex gap-6">
        <div className="bg-[#2C7EF8] rounded-[10px] max-w-[134px] min-w-[134px] max-h-[134px] min-h-[134px]">
          <img
            src={MainMinimizedImage}
            alt="Main minimized"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between items-start max-h-[20px]">
            <h3 className="text-xl">Clarifion Air Ionizer</h3>
            <div className="flex gap-2.5 items-center font-semibold">
              <span className="text-[#969696] text-base">$180</span>
              <span className="text-[#2C7EF8] text-[22px]">$84</span>
            </div>
          </div>
          <div className="flex gap-0.5 items-center text-[#F2C94C]">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <StarIcon key={index} />
              ))}
          </div>
          <div className="flex gap-4 items-center text-[#37465A] text-base font-light max-h-[22px]">
            <CheckGroupIcon />
            <span>12 left in Stock</span>
          </div>
          <span className="text-base text-[#4D5254] leading-[22px]">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-4 text-base text-[#4D5254]">
        <li className="flex gap-3 items-center">
          <CheckIcon className="[&>*]:stroke-[#2C7EF8]" />
          <span>
            Negative Ion Technology may <strong>help with allergens</strong>
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <CheckIcon className="[&>*]:stroke-[#2C7EF8]" />
          <span>
            Designed for <strong>air rejuvenation</strong>
          </span>
        </li>
        <li className="flex gap-3 items-center">
          <CheckIcon className="[&>*]:stroke-[#2C7EF8]" />
          <span>
            <strong>Perfect for every room</strong> in all types of places.
          </span>
        </li>
      </ul>
      <div className="flex gap-4 py-3 px-4 items-center bg-[#EDF3FD] rounded-[10px]">
        <DiscountIcon />
        <span className="text-base">
          Save <strong className="font-normal text-[#2C7EF8]">53%</strong> and
          get{" "}
          <strong className="font-normal text-[#2C7EF8]">
            6 extra Clarifision
          </strong>{" "}
          for only{" "}
          <strong className="font-normal text-[#2C7EF8]">$14 Each</strong>.
        </span>
      </div>
      <div className="flex flex-col">
        <button className="flex items-center justify-center gap-[19.76px] bg-[#59AE43] uppercase text-white py-4 text-xl font-bold rounded-[50px] w-full text-center mb-3">
          <span>Yes - Claim my discount</span>
          <ArrowRightIcon />
        </button>
        <div className="flex px-4 py-2 text-[#4D5254] text-xs border-solid border border-[#CFCFCF] rounded-[4px] mb-5 gap-4 capitalize">
          <span>Free shipping</span>
          <span className="flex gap-2.5 items-center px-4 border-x border-[#CFCFCF] border-solid">
            <LockIcon />
            <span>Secure 256-bit SSL encryption</span>
          </span>
          <span className="flex gap-0.5 items-center">
            <VisaIcon className="w-[24px] h-[14px]" />
            <ShopPayIcon className="w-[24px] h-[14px]" />
            <PaypalIcon className="w-[24px] h-[14px]" />
            <MasterCardIcon className="w-[24px] h-[14px]" />
            <GPayIcon className="w-[24px] h-[14px]" />
            <ApplePayIcon className="w-[24px] h-[14px]" />
            <AmexIcon className="w-[24px] h-[14px]" />
          </span>
        </div>
        <h3 className="text-center text-[#F82C2C] text-lg font-medium uppercase underline">
          No thanks, I don’t want this.
        </h3>
      </div>
      <div className="flex gap-4 text-base text-[#4D5254] leading-[22px]">
        <img src={CertificateImage} alt="Certificate" />
        <span>
          If you are not completely thrilled with your Clarifion - We have a{" "}
          <strong>30 day satisfaction guarantee.</strong> Please refer to our
          return policy at the bottom of the page for more details. Happy
          Shopping!
        </span>
      </div>
    </div>
  );
}

export { Right };
