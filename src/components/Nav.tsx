import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button/Button";
import PageContainerWrapper from "@/layouts/PageContainerWrapper";
import MobileNav from "./MobileNav";
import { useStore } from "@/hooks/useStore";
import { useEffect } from "react";

const Nav = () => {
  const { state, dispatch } = useStore();

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  useEffect(() => {
    if (state.isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [state.isMenuOpen]);

  return (
    <div className="sticky flex h-[70px] w-full border-b-[1px] border-border_color bg-background text-base">
      <PageContainerWrapper>
        <div className="flex h-full w-full items-center justify-between">
          <div className="nav">
            <Link to="/" className="[&.active]:font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-48 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
            </Link>
          </div>

          <div className="links font-base hidden items-center gap-24 lg:flex xl:flex">
            <div className="flex h-48 w-fit items-center justify-center rounded-[12px] px-24">
              <Link
                to="/design-system"
                className="text-muted hover:text-foreground-hover [&.active]:text-foreground"
              >
                Design System
              </Link>
            </div>

            <div className="flex h-48 w-fit items-center justify-center rounded-[12px] px-24">
              <Link
                to="/component-library"
                className="text-muted hover:text-foreground-hover [&.active]:text-foreground"
              >
                Component Library
              </Link>
            </div>

            <div className="flex h-40 w-fit items-center justify-center gap-8 rounded-[12px] bg-white px-24">
              <GitHubLogoIcon width={24} height={24} color="black" />
              <a
                href="www.github.com"
                className="text-muted hover:text-black"
                target="_blank"
              >
                View on Github
              </a>
            </div>
          </div>

          <Button
            variant={"ghost"}
            className="flex lg:hidden xl:hidden"
            onClick={toggleMenu}
          >
            <img src="/menu.svg" alt="mob-menu" className="h-24 w-24" />
          </Button>
        </div>
      </PageContainerWrapper>
      {state.isMenuOpen ? <MobileNav /> : null}
    </div>
  );
};

export default Nav;
