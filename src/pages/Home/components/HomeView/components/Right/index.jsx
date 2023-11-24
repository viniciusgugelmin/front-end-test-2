import { ReactComponent as StarIcon } from "../../../../../../assets/icons/star-icon.svg";
import { ReactComponent as CheckGroupIcon } from "../../../../../../assets/icons/check-group-icon.svg";
import { ReactComponent as CheckIcon } from "../../../../../../assets/icons/check-icon.svg";
import { ReactComponent as DiscountIcon } from "../../../../../../assets/icons/discount-icon.svg";

import MainMinimizedImage from "../../../../../../assets/images/main-minimized.png";

function Right() {
  return (
    <div className="flex flex-1 flex-col gap-8">
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
      <div></div>
      <div></div>
    </div>
  );
}

export { Right };
