import { MainContentWrapper } from "../../../../components";

function Nav({ options }) {
  return (
    <nav className="bg-[#252F3D]">
      <MainContentWrapper
        className="flex justify-between items-center"
        WrapperEl="ul"
      >
        {options.map(({ icon, text }, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-2 pt-[15px] pb-[13px] text-white uppercase text-xs"
          >
            {icon}
            <span title={text}>{text}</span>
          </li>
        ))}
      </MainContentWrapper>
    </nav>
  );
}

export { Nav };
