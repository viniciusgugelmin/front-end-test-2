import { ReactComponent as GuaranteeIcon } from "../../assets/icons/guarantee-icon.svg";
import { ReactComponent as DeliveryIcon } from "../../assets/icons/delivery-icon.svg";
import { ReactComponent as HappyCustomersIcon } from "../../assets/icons/happy-customers-icon.svg";
import { ReactComponent as MoneyBackGuaranteeIcon } from "../../assets/icons/money-back-guarantee-icon.svg";

import { Nav, SubHeader } from "./components";

function Header() {
  const options = [
    { icon: <GuaranteeIcon />, text: "30-DAY SATISFACTION GUARANTEE" },
    { icon: <DeliveryIcon />, text: "Free delivery on orders over $40.00" },
    { icon: <HappyCustomersIcon />, text: "50.000+ HAPPY CUSTOMERS" },
    { icon: <MoneyBackGuaranteeIcon />, text: "100% Money Back Guarantee" },
  ];

  return (
    <header>
      <Nav options={options} />
      <SubHeader />
    </header>
  );
}

export { Header };
