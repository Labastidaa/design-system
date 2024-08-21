import classNames from "classnames";
import { ReactNode } from "react";

const PageContainerWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const wrapperClassName = classNames(
    "max-w-screen-xl mx-auto w-full px-24 md:px-[50px] lg:px-[50px] xl:px-[200px]",
    className,
  );

  return <div className={wrapperClassName}>{children}</div>;
};

export default PageContainerWrapper;
