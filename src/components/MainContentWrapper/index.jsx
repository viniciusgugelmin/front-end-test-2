function MainContentWrapper({
  children,
  className,
  WrapperEl = "div",
  ...props
}) {
  return (
    <WrapperEl
      {...props}
      className={"max-w-[1245px] mx-auto" + (className ? " " + className : "")}
    >
      {children}
    </WrapperEl>
  );
}

export { MainContentWrapper };
